import * as React from 'react';
import { BaseIconProps } from './types';

interface GridIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
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

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7 13v-.5H3a.5.5 0 01-.5-.5V8H2V7h.5V3a.5.5 0 01.5-.5h4V2h1v.5h4a.5.5 0 01.5.5v4h.5v1h-.5v4a.5.5 0 01-.5.5H8v.5H7z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
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
