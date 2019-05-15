import * as React from 'react';
import { BaseIconProps } from './types';

interface LogIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LogIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LogIconProps) => {
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
          d="M9.5 6.5h11M4.5 6.5h2M4.5 14.5h2M9.5 10.5h7M9.5 14.5h11M9.5 18.5h7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `LogIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default LogIcon;
