import * as React from 'react';
import { BaseIconProps } from './types';

interface PlayIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PlayIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PlayIconProps) => {
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
          d="M6.5 4.5v16l12-8-12-8z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `PlayIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PlayIcon;
