import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ChevronDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.146 5.646a.5.5 0 01.708 0L7.5 9.293l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronDownIcon;
