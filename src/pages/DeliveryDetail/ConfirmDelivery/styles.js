import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px 16px;
  border-radius: 4px;
`;

export const Card = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;
  height: ${deviceHeight - deviceHeight * 0.3}px;

  position: absolute;
  top: 70px;
  align-self: center;
`;

export const Image = styled.Image`
  flex: 1;
`;
export const SelectImageButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const SelectImageText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #999;
`;

export const Loading = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  justify-content: center;
  align-items: center;
`;

export const ClickContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
