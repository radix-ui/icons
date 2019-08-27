import * as React from 'react';
import { BaseIconProps } from './types';

interface SlashIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const SlashIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: SlashIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
        <path d="M3 12l9-9" stroke={color} />
      </svg>
    );
  }

  console.error(`SlashIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SlashIcon;
