import * as React from 'react';
import { BaseIconProps } from './types';

interface MixerHorizontalIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const MixerHorizontalIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: MixerHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.5 4.5h-5M12.5 10.5h-1M2.5 4.5h1M2.5 10.5h5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5.5" cy="4.5" r="2" stroke={color} />
        <circle cx="9.5" cy="10.5" r="2" stroke={color} />
      </svg>
    );
  }

  console.error(`MixerHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MixerHorizontalIcon;
