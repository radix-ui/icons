import * as React from 'react';
import { BaseIconProps } from './types';

interface BoxIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const BoxIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: BoxIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V12C2.5 12.2761 2.72386 12.5 3 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V3C12.5 2.72386 12.2761 2.5 12 2.5Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BoxIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BoxIcon;
