import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const DoubleArrowDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.854 2.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7.5 5.793 3.854 2.146zm0 6a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7.5 11.793 3.854 8.146z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowDownIcon;
