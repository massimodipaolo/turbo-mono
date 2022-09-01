import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type FlexColProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const FlexCol = styled.div<FlexColProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  // margin: 0 auto;
  ${props => getCssResponsive(props)}
`;
