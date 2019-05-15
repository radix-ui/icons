import * as React from 'react';
import { BaseIconProps } from './types';

interface AlignBaselineIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const AlignBaselineIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: AlignBaselineIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20.5 20.5h-16" stroke={color} strokeLinecap="round" />
        <path
          d="M20.5 13.5l-3 4-3-4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M17.5 7.5v10" stroke={color} strokeLinecap="round" />
        <path d="M5.5 14.5h5" stroke={color} />
        <path
          d="M4.5 17.5L8 7.5l3.5 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `AlignBaselineIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default AlignBaselineIcon;
