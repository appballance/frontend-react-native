import styled from 'styled-components/native';

import { ICard } from './@types';

export const Card = styled.View<ICard>`
  width: ${({ width }) => width || '125px'};
  height: ${({ height }) => height || '155px'};
  background: ${({ background }) => background};
  border-radius: 10px;
  padding: 20px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${({ fontColor, theme: { palette } }) =>
    fontColor || palette.colors.white.main};

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;
