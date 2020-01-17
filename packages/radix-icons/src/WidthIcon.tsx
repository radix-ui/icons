import * as React from 'react';
import { BaseIconProps } from './types';

interface WidthIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const WidthIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: WidthIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.81811 4.68161C4.99385 4.85734 4.99385 5.14227 4.81811 5.318L3.08631 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4938 7.35734 13.4938 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08631L4.81811 9.68161C4.99385 9.85734 4.99385 10.1423 4.81811 10.318C4.64238 10.4937 4.35745 10.4937 4.18172 10.318L1.68172 7.818C1.50598 7.64227 1.50598 7.35734 1.68172 7.18161L4.18172 4.68161C4.35745 4.50587 4.64238 4.50587 4.81811 4.68161Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`WidthIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default WidthIcon;
