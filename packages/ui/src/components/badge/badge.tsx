import styled from 'styled-components';
import type { UIStyledComponentProps } from '../types';
import { getCssResponsive } from '../utils';

type Props = {
};

export type BadgeProps = UIStyledComponentProps<Props>;

const Badge = styled.div<BadgeProps>`
  display: inline-block;
  line-height: 1;
  padding: 0.2em;
  border-radius: 0.6em;
  font-size: 0.8em;
  min-width: 1.2em;
  text-align: center;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
  ${props => getCssResponsive(props)}
`;

export default Badge;
