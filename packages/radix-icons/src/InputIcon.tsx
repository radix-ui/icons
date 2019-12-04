import * as React from 'react';
import { BaseIconProps } from './types';

interface InputIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const InputIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: InputIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14 6H1v3h13V6zM1 5a1 1 0 00-1 1v3a1 1 0 001 1h13a1 1 0 001-1V6a1 1 0 00-1-1H1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M0 6a1 1 0 011-1h13a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V6z"
          fill={color}
          opacity=".15"
        />
        <path
          d="M14 6H1v3h13V6zM1 5a1 1 0 00-1 1v3a1 1 0 001 1h13a1 1 0 001-1V6a1 1 0 00-1-1H1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`InputIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InputIcon;
