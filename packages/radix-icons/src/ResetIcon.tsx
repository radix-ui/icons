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
          d="M3 2.5a.5.5 0 00-1 0v3a.5.5 0 00.5.5h3a.5.5 0 000-1H3.677C4.787 3.842 5.694 3 7.5 3 10.239 3 12 5.24 12 7.5S10.239 12 7.5 12a.5.5 0 000 1c3.361 0 5.5-2.76 5.5-5.5S10.861 2 7.5 2C5.288 2 4.115 3.095 3 4.26V2.5z"
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
