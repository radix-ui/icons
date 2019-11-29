import * as React from 'react';
import { BaseIconProps } from './types';

interface GridIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const GridIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: GridIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 5v4h4V8H3zm4-1H3V3h4v4zm1 1v4h4V8H8zm4-1H8V3h4v4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`GridIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default GridIcon;
