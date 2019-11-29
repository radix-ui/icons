import * as React from 'react';
import { BaseIconProps } from './types';

interface CornerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CornerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CornerIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 4A3.5 3.5 0 004 7.5v4a.5.5 0 01-1 0v-4A4.5 4.5 0 017.5 3h4a.5.5 0 010 1h-4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CornerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CornerIcon;
