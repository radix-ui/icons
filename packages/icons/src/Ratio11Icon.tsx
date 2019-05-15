import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio11IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio11Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio11IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20.5 4.5h-16v16h16v-16z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `Ratio11Icon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default Ratio11Icon;
