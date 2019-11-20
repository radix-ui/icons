import * as React from 'react';
import { BaseIconProps } from './types';

interface InfoCircledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const InfoCircledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: InfoCircledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 20.5a8 8 0 100-16 8 8 0 000 16z" stroke={color} />
        <path d="M12.5 16.5v-5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 9a.5.5 0 100-1 .5.5 0 000 1z" fill={color} />
      </svg>
    );
  }

  console.error(`InfoCircledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InfoCircledIcon;
