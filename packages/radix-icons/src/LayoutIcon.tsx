import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LayoutIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LayoutIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9 5H6v5h3V5zm1 0v5h3V5h-3zM2 5h3v5H2V5zm0-1a1 1 0 00-1 1v5a1 1 0 001 1h11a1 1 0 001-1V5a1 1 0 00-1-1H2z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LayoutIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LayoutIcon;
