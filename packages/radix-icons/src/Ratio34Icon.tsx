import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio34IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio34Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio34IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.5 4.5h-12v16h12v-16z" stroke={color} />
      </svg>
    );
  }

  console.error(`Ratio34Icon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default Ratio34Icon;
