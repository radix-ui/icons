import * as React from 'react';
import { BaseIconProps } from './types';

interface DownloadIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const DownloadIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DownloadIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.05a.45.45 0 01.45.45v6.914l2.232-2.232a.45.45 0 11.636.636l-3 3a.45.45 0 01-.636 0l-3-3a.45.45 0 01.636-.636L7.05 8.414V1.5a.45.45 0 01.45-.45zM2.5 10a.5.5 0 01.5.5V12c0 .554.446 1 .996 1H11.001A.999.999 0 0012 12v-1.5a.5.5 0 011 0V12c0 1.104-.894 2-1.999 2H3.997A1.997 1.997 0 012 12v-1.5a.5.5 0 01.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DownloadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DownloadIcon;
