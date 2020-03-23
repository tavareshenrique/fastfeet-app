import styled, { css } from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  height: 100px;
  margin: 20px;
`;

export const AvatarImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const Bio = styled.View`
  display: flex;
  flex-direction: column;

  margin-left: 15px;
`;

export const Welcome = styled.Text`
  color: #969696;
`;

export const Name = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 25px;
`;

export const Exit = styled(Icon)`
  margin-left: 25px;
`;

export const Content = styled.View``;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 25px;
`;

export const FilterContaier = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Filter = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  font-size: 15px;

  ${({ active }) =>
    active &&
    css`
      color: #8f71ea;
      text-decoration: underline;
    `}
`;
