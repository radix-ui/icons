import * as React from 'react';
import { BaseIconProps } from './types';

interface PositionStaticIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PositionStaticIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PositionStaticIconProps) => {
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
          d="M5.5 7.5v-2h2M7.5 19.5h-2v-2M19.5 17.5v2h-2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 5.5h4M10.5 19.5h4M5.5 14.5v-4M19.5 14.5v-4"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M17.5 5.5h2v2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `PositionStaticIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PositionStaticIcon;
