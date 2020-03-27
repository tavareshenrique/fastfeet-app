import styled, { css } from 'styled-components/native';

function topSpace(space) {
  const top = 45;
  if (space === 1) {
    return top;
  }

  return 0;
}

export const Container = styled.View`
  flex: 1;
`;
export const Card = styled.View`
  flex: 1;

  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;
  height: 65px;

  ${({ sizeIsOne }) =>
    sizeIsOne &&
    css`
      align-self: center;
      bottom: 30px;
    `}

  ${({ sizeIsOne }) =>
    !sizeIsOne &&
    css`
      position: absolute;
      align-self: center;
      top: 90px;
    `}
`;

export const CardContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SecondaryCard = styled.View`
  flex: 1;

  border: #ccc;
  border-radius: 5px;
  background: #fff;
  width: 300px;
  height: 65px;

  margin-top: ${(props) => `${topSpace(props.space)}px`};
  margin-bottom: 10px;
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
