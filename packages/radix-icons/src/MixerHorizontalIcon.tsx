import * as React from 'react';
import { BaseIconProps } from './types';

interface MixerHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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

  console.error(`MixerHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MixerHorizontalIcon;
