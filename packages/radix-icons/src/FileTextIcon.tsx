import * as React from 'react';
import { BaseIconProps } from './types';

interface FileTextIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const FileTextIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: FileTextIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.5 19.5v-14a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 16.5h6M9.5 12.5h6M9.5 8.5h1" stroke={color} strokeLinecap="round" />
        <path d="M13.5 5v4.5H18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`FileTextIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FileTextIcon;
