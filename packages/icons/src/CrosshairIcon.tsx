import * as React from 'react';
import { BaseIconProps } from './types';

interface CrosshairIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const CrosshairIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CrosshairIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12.5 5v3M5 12.5h3M17 12.5h3M12.5 17v3"
          stroke={color}
        />
      </svg>
    );
  }

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
        <path d="M7.5 2v3M2 7.5h3M10 7.5h3M7.5 10v3" stroke={color} />
      </svg>
    );
  }

  console.error(
    `CrosshairIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CrosshairIcon;
