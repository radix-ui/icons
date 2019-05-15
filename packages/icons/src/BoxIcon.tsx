import * as React from 'react';
import { BaseIconProps } from './types';

interface BoxIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const BoxIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BoxIconProps) => {
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
          d="M18 5.5H7A1.5 1.5 0 0 0 5.5 7v11A1.5 1.5 0 0 0 7 19.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5z"
          stroke={color}
        />
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
        <path
          d="M12 2.5H3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `BoxIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BoxIcon;
