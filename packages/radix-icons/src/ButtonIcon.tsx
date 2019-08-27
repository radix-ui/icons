import * as React from 'react';
import { BaseIconProps } from './types';

interface ButtonIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ButtonIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ButtonIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 9.5H6A1.5 1.5 0 0 0 4.5 11v3A1.5 1.5 0 0 0 6 15.5h13a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 19 9.5z"
          stroke={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="1.5" y="4.5" width="12" height="6" rx="1.5" stroke={color} />
        <path d="M4.5 7.5h6" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`ButtonIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ButtonIcon;
