import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const PrimaryCard = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 325px;

  position: absolute;
  top: 70px;
  align-self: center;
`;

export const SecondaryCard = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 325px;

  align-self: center;
  margin-top: 195px;
`;

export const CardInformation = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #7159c1;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const DataInformation = styled.View`
  padding: 10px;
`;

export const Label = styled.Text`
  color: #9e9e9e;
  font-weight: bold;
  font-size: 14px;
`;

export const Data = styled.Text`
  font-size: 13px;
  color: #9e9e9e;
`;

export const DateContent = styled.View`
  flex-direction: row;
`;

export const MenuCard = styled.View`
  flex-direction: row;
  padding: 2px;
  width: 325px;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 8px;

  border: #ccc;
  border-radius: 5px;
  background: #fafafa;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : '33%')};
  padding: 3px;
`;

export const MenuText = styled.Text`
  text-align: center;
  font-weight: 500;
  color: #7a7a7a;
`;

export const Line = styled.View`
  width: 1px;
  height: 50px;
  margin-top: 10px;
  background: #a8a8a8;
`;
