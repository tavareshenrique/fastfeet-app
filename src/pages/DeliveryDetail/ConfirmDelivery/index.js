import React, { useState, useEffect } from 'react';

import { Alert, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {
  confirmDeliveryRequest,
  resetConfirmDelivery,
} from '~/store/modules/delivery/actions';

import api from '~/services/api';

import Header from '~/components/Header';
import Camera from '~/components/Camera';
import Button from '~/components/Button';

import {
  Container,
  Card,
  Image,
  SelectImageButton,
  SelectImageText,
  Loading,
  ClickContainer,
} from './styles';

export default function ConfirmDelivery() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const deliveryman = useSelector((state) => state.auth.data);
  const confirmDelivery = useSelector(
    (state) => state.delivery.confirmDelivery,
  );

  const { id } = route.params;

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [openCamera, setOpenCamera] = useState(false);

  useEffect(() => {
    if (confirmDelivery) {
      dispatch(resetConfirmDelivery());
      navigation.navigate('DeliveryDetail');
    }
  }, [confirmDelivery, navigation, dispatch]);

  async function handleOpenCamera() {
    setOpenCamera(true);
  }

  function handleLongPress() {
    Alert.alert(
      'Remoção imagem',
      'Deseja remover essa imagem',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => setImage(),
        },
      ],
      {
        cancelable: false,
      },
    );
  }

  async function handleDone() {
    const idDeliverymen = deliveryman.map((deliverymen) => deliverymen.id);

    setLoading(true);
    let signature_id;
    try {
      if (image) {
        const data = new FormData();
        data.append('signatures', {
          type: 'image/jpg',
          uri: image,
          name: 'assignature.jpg',
        });
        const response = await api.post('signatures', data);
        signature_id = response.data.id;
      }

      dispatch(confirmDeliveryRequest(idDeliverymen, id, signature_id));
    } catch (error) {
      Alert.alert(`${error.response.data.error || 'Error interno'}`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Header title="Confirmar Entrega" />

      <Card>
        {!openCamera ? (
          <Container>
            <SelectImageButton
              onPress={handleOpenCamera}
              onLongPress={image && handleLongPress}
            >
              {image ? (
                <Image
                  source={{
                    uri: image,
                  }}
                />
              ) : (
                <ClickContainer>
                  <SelectImageText>Clique para ativar a câmera</SelectImageText>
                  <Icons name="touch-app" color="#816fe7" size={30} />
                </ClickContainer>
              )}
            </SelectImageButton>
            <Button onPress={handleDone}>Enviar</Button>
          </Container>
        ) : (
          <Camera
            selectImage={setImage}
            closeCamera={() => setOpenCamera(false)}
          />
        )}
      </Card>
      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#ccc" />
        </Loading>
      )}
    </>
  );
}
