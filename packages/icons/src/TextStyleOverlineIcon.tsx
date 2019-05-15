import * as React from 'react';
import { BaseIconProps } from './types';

interface TextStyleOverlineIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextStyleOverlineIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextStyleOverlineIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M18.5 4.5h-12" stroke={color} strokeLinecap="round" />
        <path
          d="M8.5 7.5c0 6-.5 10 4 10s4-4 4-10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `TextStyleOverlineIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextStyleOverlineIcon;
