import styled, { css } from 'styled-components/native';

const marginTop = 80;

export const Container = styled.View``;

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
  margin-top: ${marginTop}px;

  position: absolute;
  padding: 10px;

  ${({ isBottom }) =>
    isBottom &&
    css`
      margin-top: ${marginTop * 3.9}px;
    `}
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: #816fe7;
  font-size: 15px;
  font-weight: bold;

  margin-left: 5px;
`;
export const CardContent = styled.View`
  margin-top: 10px;
`;

export const DataContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 15px;
`;

export const TextValue = styled.Text`
  font-size: 15px;
`;

export const Menu = styled.View`
  background: #fafafa;
  flex-direction: row;
  justify-content: space-between;

  width: 350px;
  height: auto;

  border-radius: 5px;

  margin-right: 25px;
  margin-left: 25px;
  margin-top: 390px;

  padding: 10px;
`;

export const MenuContent = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100px;
`;

export const Line = styled.View`
  width: 1px;
  background: #cbcbcb;
`;

export const LabelMenu = styled.Text`
  color: #999;
  text-align: center;
  font-size: 14px;
`;
