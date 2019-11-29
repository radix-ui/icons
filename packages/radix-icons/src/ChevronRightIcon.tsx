import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ChevronRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.647 3.146a.5.5 0 01.707 0l4 4a.5.5 0 010 .707l-4 4a.5.5 0 01-.707-.707L9.293 7.5 5.647 3.853a.5.5 0 010-.707z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronRightIcon;
