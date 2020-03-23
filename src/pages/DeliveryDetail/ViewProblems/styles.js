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
  justify-content: center;

  background: #fff;
  width: 350px;
  height: 80px;

  border-radius: 5px;

  margin-right: 25px;
  margin-left: 25px;
  margin-top: 110px;

  position: absolute;
  padding: 10px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentDescription = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  color: #b1b1b1;
  font-weight: bold;
  font-size: 18px;
`;

export const Data = styled.Text`
  color: #c9c8c9;
  font-size: 14px;
`;
