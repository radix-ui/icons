import * as React from 'react';
import { BaseIconProps } from './types';

interface LinkIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const LinkIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LinkIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.5 8.5H8c-3.5 0-5 1.75-5 4s1.5 4 5 4h1.5M15.5 8.5H17c3.5 0 5 1.75 5 4s-1.5 4-5 4h-1.5M17.5 12.5h-10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 4.5H4C1.5 4.5.5 6 .5 7.5s1 3 3.5 3h1.5M9.5 4.5H11c2.5 0 3.5 1.5 3.5 3s-1 3-3.5 3H9.5M10.5 7.5h-6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`LinkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LinkIcon;
