import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceMicrophoneIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceMicrophoneIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceMicrophoneIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.5 5.5a3 3 0 1 0-6 0v8a3 3 0 1 0 6 0v-8z" stroke={color} />
        <path
          d="M6.5 11.5v2c0 6 5.647 6 6 6 .353 0 6 0 6-6v-2m-2 11h-8 8zm-4-3v3-3z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DeviceMicrophoneIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceMicrophoneIcon;
