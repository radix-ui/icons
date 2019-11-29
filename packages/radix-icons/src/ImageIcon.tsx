import * as React from 'react';
import { BaseIconProps } from './types';

interface ImageIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ImageIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ImageIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 3H3v8.888l6.195-5.719a.45.45 0 01.555-.043l2.25 1.5V3zm0 5.707L9.545 7.071 4.205 12H12V8.707zM3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V3a1 1 0 00-1-1H3zm2.5 4.026a.526.526 0 100-1.052.526.526 0 000 1.052zm0 .85a1.376 1.376 0 100-2.752 1.376 1.376 0 000 2.752z"
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
