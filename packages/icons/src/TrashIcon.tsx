import * as React from 'react';
import { BaseIconProps } from './types';

interface TrashIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const TrashIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TrashIconProps) => {
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
          d="M17 8.5H8a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M17.5 6.5h-10a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z"
          stroke={color}
        />
        <path
          d="M10.5 4.5h4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10.5 11v7M12.5 11v7M14.5 11v7" stroke={color} />
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
        <rect
          x="4.5"
          y="4.5"
          width="6"
          height="8"
          rx=".5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path d="M3.5 4.5h8M5.5 2.5h4" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(
    `TrashIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TrashIcon;
