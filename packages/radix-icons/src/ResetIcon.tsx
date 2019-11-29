import * as React from 'react';
import { BaseIconProps } from './types';

interface ResetIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ResetIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ResetIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 5.5v-3a.5.5 0 011 0v1.757C4.115 3.091 5.303 2 7.5 2 10.861 2 13 4.76 13 7.5S10.861 13 7.5 13a.5.5 0 010-1c2.739 0 4.5-2.24 4.5-4.5S10.239 3 7.5 3c-1.819 0-2.71.843-3.82 2H5.5a.5.5 0 010 1h-3-.003A.3.3 0 002.5 6m-.351-.144a.212.212 0 01-.005-.005A.5.5 0 012 5.5"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ResetIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ResetIcon;
