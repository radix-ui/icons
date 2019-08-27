import * as React from 'react';
import { BaseIconProps } from './types';

interface MixerVerticalIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const MixerVerticalIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: MixerVerticalIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.5 10.5v-6M6.5 20.5v-6M12.5 6.5v-2M12.5 20.5v-10M18.5 20.5v-2M18.5 14.5v-10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          stroke={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 7.5v-5M4.5 12.5v-1M10.5 3.5v-1M10.5 12.5v-5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4.5" cy="9.5" r="2" stroke={color} />
        <circle cx="10.5" cy="5.5" r="2" stroke={color} />
      </svg>
    );
  }

  console.error(`MixerVerticalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MixerVerticalIcon;
