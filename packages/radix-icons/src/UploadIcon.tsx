import * as React from 'react';
import { BaseIconProps } from './types';

interface UploadIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const UploadIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: UploadIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.05 3.587V10a.45.45 0 00.9 0V3.587l2.232 2.231a.45.45 0 10.636-.636L7.823 2.187a.449.449 0 00-.646 0L4.182 5.182a.45.45 0 00.636.636L7.05 3.587zM2.5 10a.5.5 0 01.5.5V12c0 .554.446 1 .996 1H11.001A.999.999 0 0012 12v-1.5a.5.5 0 011 0V12c0 1.104-.894 2-1.999 2H3.997A1.997 1.997 0 012 12v-1.5a.5.5 0 01.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`UploadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default UploadIcon;
