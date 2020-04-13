import * as React from 'react';
import { BaseIconProps } from './types';

interface ImageIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ImageIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ImageIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 3H3L3 11.8876L9.19477 6.16934C9.34744 6.02841 9.57674 6.01033 9.74962 6.12558L12 7.62583V3ZM12 8.7075L9.54502 7.07085L4.20511 12H12V8.7075ZM3 2C2.44772 2 2 2.44771 2 3V12C2 12.5523 2.44771 13 3 13H12C12.5523 13 13 12.5523 13 12V3C13 2.44772 12.5523 2 12 2H3ZM5.50003 6.02604C5.79054 6.02604 6.02604 5.79054 6.02604 5.50003C6.02604 5.20953 5.79054 4.97402 5.50003 4.97402C5.20953 4.97402 4.97402 5.20953 4.97402 5.50003C4.97402 5.79054 5.20953 6.02604 5.50003 6.02604ZM5.50003 6.87604C6.25998 6.87604 6.87604 6.25998 6.87604 5.50003C6.87604 4.74008 6.25998 4.12402 5.50003 4.12402C4.74008 4.12402 4.12402 4.74008 4.12402 5.50003C4.12402 6.25998 4.74008 6.87604 5.50003 6.87604Z"
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
          d="M2 3C2 2.44771 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44771 13 2 12.5523 2 12V3Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 3H3L3 11.8876L9.19477 6.16934C9.34744 6.02841 9.57674 6.01033 9.74962 6.12558L12 7.62583V3ZM12 8.7075L9.54502 7.07085L4.20511 12H12V8.7075ZM3 2C2.44772 2 2 2.44771 2 3V12C2 12.5523 2.44771 13 3 13H12C12.5523 13 13 12.5523 13 12V3C13 2.44772 12.5523 2 12 2H3ZM6.87604 5.50003C6.87604 6.25998 6.25998 6.87604 5.50003 6.87604C4.74008 6.87604 4.12402 6.25998 4.12402 5.50003C4.12402 4.74008 4.74008 4.12402 5.50003 4.12402C6.25998 4.12402 6.87604 4.74008 6.87604 5.50003Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ImageIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ImageIcon;
