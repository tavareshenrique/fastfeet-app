import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const PrimaryCard = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;

  position: absolute;

  margin-left: 30px;
  margin-top: 70px;
`;

export const SecondaryCard = styled.View`
  border: #ccc;
  border-radius: 5px;
  background: #fff;

  margin-right: 30px;
  margin-left: 30px;
  margin-top: ${(props) => (props.heightCard === 238 ? '193px' : '178px')};
`;

export const CardInformation = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #816fe7;
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

  border: #ccc;
  border-radius: 5px;
  background: #fafafa;

  margin-right: 30px;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const MenuText = styled.Text`
  text-align: center;
  font-weight: 700;
  color: #7a7a7a;
`;

export const Line = styled.View`
  width: 1px;
  background: #a8a8a8;
`;
