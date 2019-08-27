import * as React from 'react';
import { BaseIconProps } from './types';

interface PlayNextIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PlayNextIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PlayNextIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 4.5v16l12-8-12-8z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20.5 20.5v-16" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`PlayNextIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PlayNextIcon;
