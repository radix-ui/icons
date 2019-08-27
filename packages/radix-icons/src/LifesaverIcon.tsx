import * as React from 'react';
import { BaseIconProps } from './types';

interface LifesaverIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LifesaverIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LifesaverIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} />
        <path
          d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 18.5l4-4M14.5 10.5l4-4M10.5 10.5l-4-4M18 18l-3.5-3.5"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`LifesaverIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LifesaverIcon;
