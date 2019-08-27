import * as React from 'react';
import { BaseIconProps } from './types';

interface InputIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const InputIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: InputIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path stroke={color} d="M.5 5.5h14v4H.5z" />
      </svg>
    );
  }

  console.error(`InputIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InputIcon;
