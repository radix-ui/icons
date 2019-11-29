import * as React from 'react';
import { BaseIconProps } from './types';

interface TextFileIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TextFileIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TextFileIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2.5a.5.5 0 01.5-.5h5.586a.5.5 0 01.353.146l2.415 2.415a.5.5 0 01.146.353V12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10zM3.5 1A1.5 1.5 0 002 2.5v10A1.5 1.5 0 003.5 14h8a1.5 1.5 0 001.5-1.5V4.914a1.5 1.5 0 00-.44-1.06l-2.414-2.415A1.5 1.5 0 009.086 1H3.5zm1 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 3a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 3a.5.5 0 000 1h6a.5.5 0 000-1h-6z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextFileIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextFileIcon;
