import * as React from 'react';
import { BaseIconProps } from './types';

interface DownloadIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const DownloadIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DownloadIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 12.5V20a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7.5M12.5 4.5v11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 10.5l4 5 4-5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.5 7.5V12c0 .25.25.5.5.5h9c.25 0 .5-.25.5-.5V7.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.5 2.5v7" stroke={color} strokeLinecap="round" />
        <path d="M5.5 6.5l2 3 2-3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`DownloadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DownloadIcon;
