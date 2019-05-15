import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio169IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio169Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio169IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20.5 7.5h-16v10h16v-10z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `Ratio169Icon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default Ratio169Icon;
