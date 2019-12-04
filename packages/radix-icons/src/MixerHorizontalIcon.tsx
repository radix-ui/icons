import * as React from 'react';
import { BaseIconProps } from './types';

interface MixerHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const MixerHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: MixerHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 004.9 0A.507.507 0 008 5h5.5a.5.5 0 000-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 00-4.9 0A.507.507 0 003 4H1.5a.5.5 0 000 1H3zm8.95 5.998a2.5 2.5 0 01-4.9 0A.507.507 0 017 11H1.5a.5.5 0 010-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 014.9 0A.506.506 0 0112 10h1.5a.5.5 0 010 1H12c-.017 0-.033 0-.05-.002zM8 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
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
          d="M7.5 4.5a2 2 0 11-4 0 2 2 0 014 0zm0 0A.5.5 0 018 4h5.5a.5.5 0 010 1H8a.5.5 0 01-.5-.5zm-4 0A.5.5 0 013 5H1.5a.5.5 0 010-1H3a.5.5 0 01.5.5zM12 10a.5.5 0 00-.5.5 2 2 0 10-4 0A.5.5 0 007 10H1.5a.5.5 0 000 1H7a.5.5 0 00.5-.5 2 2 0 104 0 .5.5 0 00.5.5h1.5a.5.5 0 000-1H12z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 004.9 0A.507.507 0 008 5h5.5a.5.5 0 000-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 00-4.9 0A.507.507 0 003 4H1.5a.5.5 0 000 1H3zm8.95 5.998a2.5 2.5 0 01-4.9 0A.507.507 0 017 11H1.5a.5.5 0 010-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 014.9 0A.506.506 0 0112 10h1.5a.5.5 0 010 1H12c-.017 0-.033 0-.05-.002zM8 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MixerHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MixerHorizontalIcon;
