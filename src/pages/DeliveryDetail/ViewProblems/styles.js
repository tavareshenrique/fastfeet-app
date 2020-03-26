import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Card = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;

  position: absolute;

  margin-left: 30px;
  margin-top: 90px;
`;

export const CardSeconday = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;

  margin-left: 30px;
  margin-top: ${(props) => 40 / props.sub}px;
`;

export const Information = styled.View`
  flex-direction: row;
`;

export const Description = styled.Text`
  flex: 1;
  margin: 20px;
`;

export const Date = styled.Text`
  margin: 20px;
`;
