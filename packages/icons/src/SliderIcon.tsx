import * as React from 'react';
import { BaseIconProps } from './types';

interface SliderIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const SliderIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: SliderIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M.5 12.5h8M16.5 12.5h8" stroke={color} strokeLinecap="round" />
        <path d="M12.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
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
        <circle cx="7.5" cy="7.5" r="3" stroke={color} />
        <path d="M.5 7.5h4M10.5 7.5h4" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(
    `SliderIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default SliderIcon;
