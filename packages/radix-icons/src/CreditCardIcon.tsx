import * as React from 'react';
import { BaseIconProps } from './types';

interface CreditCardIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CreditCardIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CreditCardIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 6.5H6A1.5 1.5 0 004.5 8v9A1.5 1.5 0 006 18.5h13a1.5 1.5 0 001.5-1.5V8A1.5 1.5 0 0019 6.5zM4.5 10.5h16"
          stroke={color}
        />
        <path d="M7.5 15.5h2" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`CreditCardIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CreditCardIcon;
