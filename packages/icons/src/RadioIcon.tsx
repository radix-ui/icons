import * as React from 'react';
import { BaseIconProps } from './types';

interface RadioIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const RadioIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: RadioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
        <circle cx="7.5" cy="7.5" r="2.5" fill={color} />
      </svg>
    );
  }

  console.error(
    `RadioIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default RadioIcon;
