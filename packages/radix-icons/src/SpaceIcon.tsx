import * as React from 'react';
import { BaseIconProps } from './types';

interface SpaceIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SpaceIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SpaceIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 2.05c-.8 0-1.45.65-1.45 1.45V4a.45.45 0 00.9 0v-.5a.55.55 0 01.55-.55H4a.45.45 0 100-.9h-.5zm3 0a.45.45 0 100 .9h2a.45.45 0 100-.9h-2zM6.05 12.5a.45.45 0 01.45-.45h2a.45.45 0 010 .9h-2a.45.45 0 01-.45-.45zm-3.1-6a.45.45 0 10-.9 0v2a.45.45 0 10.9 0v-2zm9.55-.45a.45.45 0 01.45.45v2a.45.45 0 01-.9 0v-2a.45.45 0 01.45-.45zm-1.5-4a.45.45 0 000 .9H11.5a.55.55 0 01.55.55V4a.45.45 0 00.9 0v-.5c0-.8-.65-1.45-1.45-1.45H11zm-8.5 8.5a.45.45 0 01.45.45v.5c0 .304.246.55.55.55H4a.45.45 0 010 .9h-.5c-.8 0-1.45-.65-1.45-1.45V11a.45.45 0 01.45-.45zm10.45.45a.45.45 0 00-.9 0v.5a.55.55 0 01-.55.55H11a.45.45 0 000 .9H11.5c.8 0 1.45-.65 1.45-1.45V11z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SpaceIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SpaceIcon;
