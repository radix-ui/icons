import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const DoubleArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.146 6.854a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L7.5 3.207l3.646 3.647zm0 6a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 00.708.708L7.5 9.207l3.646 3.647z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowUpIcon;
