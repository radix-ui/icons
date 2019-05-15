import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio43IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio43Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio43IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20.5 6.5h-16v12h16v-12z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `Ratio43Icon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default Ratio43Icon;
