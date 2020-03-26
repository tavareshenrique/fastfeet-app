import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Card = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;
  height: 65px;

  margin-left: 30px;
  margin-top: 10px;
`;

export const Information = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Description = styled.Text`
  flex: 1;
  margin: 20px;
`;

export const Date = styled.Text`
  margin: 20px;
`;
