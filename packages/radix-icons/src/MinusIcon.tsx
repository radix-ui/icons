import * as React from 'react';
import { BaseIconProps } from './types';

interface MinusIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const MinusIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: MinusIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 8H3V7h9v1z" fill={color} fillRule="evenodd" clipRule="evenodd" />
      </svg>
    );
  }

  console.error(`MinusIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MinusIcon;
