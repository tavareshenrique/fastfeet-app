import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const IconButtonTop = styled.TouchableOpacity`
  margin: 8px;
  padding: 5px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background: rgba(144, 133, 128, 0.8);
`;

export const Icon = styled(IconMaterialIcons)``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
