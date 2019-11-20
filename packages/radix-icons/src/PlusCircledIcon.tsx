import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusCircledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PlusCircledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PlusCircledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 20.5a8 8 0 100-16 8 8 0 000 16z" stroke={color} />
        <path d="M8.5 12.5h8M12.5 16.5v-8" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`PlusCircledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PlusCircledIcon;
