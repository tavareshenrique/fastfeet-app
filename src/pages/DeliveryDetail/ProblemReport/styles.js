import styled from 'styled-components/native';

export const Header = styled.View`
  background: #816fe7;
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
  height: 150px;
`;

export const HeaderTitle = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Card = styled.View`
  background: #fff;
  width: 350px;
  height: auto;

  border-radius: 5px;

  margin-right: 25px;
  margin-left: 25px;
  margin-top: 80px;

  position: absolute;
  padding: 10px;
`;
