import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Camera as RNCamera,
  IconButton,
  Icon,
  Header,
  Footer,
  IconButtonTop,
} from './styles';

const androidCameraPermissionOptions = {
  title: 'Permissão para usar a câmera',
  message: 'Nós precisamos de sua permissão para usar sua câmera',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

const androidRecordAudioPermissionOptions = {
  title: 'Permissão para usar o microfone',
  message: 'Nós precisamos de sua permissão para usar seu microfone',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

export default function Camera({ selectImage, closeCamera }) {
  const [flashMode, setFlashMode] = useState(false);

  async function takePicture(camera) {
    const options = {
      quality: 0.5,
      base64: true,
    };
    const data = await camera.takePictureAsync(options);
    selectImage(data.uri);
    closeCamera();
  }

  return (
    <RNCamera
      type={RNCamera.Constants.Type.back}
      flashMode={
        flashMode
          ? RNCamera.Constants.FlashMode.on
          : RNCamera.Constants.FlashMode.off
      }
      androidCameraPermissionOptions={androidCameraPermissionOptions}
      androidRecordAudioPermissionOptions={androidRecordAudioPermissionOptions}
    >
      {({ camera, status }) => (
        <Container>
          <Header>
            <IconButtonTop onPress={() => setFlashMode((value) => !value)}>
              <Icon
                name={flashMode ? 'flash-on' : 'flash-off'}
                size={30}
                color="#fff"
              />
            </IconButtonTop>
            <IconButtonTop onPress={() => closeCamera()}>
              <Icon name="close" size={30} color="#fff" />
            </IconButtonTop>
          </Header>
          <Footer>
            <IconButton
              onPress={() => takePicture(camera)}
              disabled={status !== 'READY'}
            >
              <Icon name="photo-camera" size={50} color="#fff" />
            </IconButton>
          </Footer>
        </Container>
      )}
    </RNCamera>
  );
}

Camera.propTypes = {
  selectImage: PropTypes.func.isRequired,
  closeCamera: PropTypes.func.isRequired,
};
