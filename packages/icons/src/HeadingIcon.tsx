import * as React from 'react';
import { BaseIconProps } from './types';

interface HeadingIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const HeadingIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: HeadingIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.5 2.5v10M10.5 2.5v10M2.5 12.5h4M8.5 12.5h4M4.5 7.5h6M2.5 2.5h4M8.5 2.5h4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `HeadingIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default HeadingIcon;
