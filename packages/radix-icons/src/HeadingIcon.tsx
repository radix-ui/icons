import * as React from 'react';
import { BaseIconProps } from './types';

interface HeadingIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const HeadingIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: HeadingIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.124 2.5c0-.207.168-.375.375-.375h4a.375.375 0 110 .75H5V7.05h5V2.875H8.5a.375.375 0 110-.75h4a.375.375 0 010 .75H11v9.25h1.5a.375.375 0 010 .75h-4a.375.375 0 010-.75H10V7.95H5v4.125h1.5a.425.425 0 010 .85h-4a.425.425 0 010-.85H4v-9.2H2.5a.375.375 0 01-.376-.375z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HeadingIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HeadingIcon;
