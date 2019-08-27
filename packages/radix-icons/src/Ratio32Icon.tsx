import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio32IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio32Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio32IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16.5 5.5h-8v14h8v-14z" stroke={color} />
      </svg>
    );
  }

  console.error(`Ratio32Icon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default Ratio32Icon;
