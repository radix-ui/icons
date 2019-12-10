import * as React from 'react';
import { BaseIconProps } from './types';

interface CornersIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CornersIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CornersIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 3a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2A1.5 1.5 0 013.5 2h2a.5.5 0 010 1h-2zM9 2.5a.5.5 0 01.5-.5h2A1.5 1.5 0 0113 3.5v2a.5.5 0 01-1 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5zM2.5 9a.5.5 0 01.5.5v2a.5.5 0 00.5.5h2a.5.5 0 010 1h-2A1.5 1.5 0 012 11.5v-2a.5.5 0 01.5-.5zm10 0a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5z"
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
        <rect opacity=".2" x="2" y="2" width="11" height="11" rx="1.5" fill={color} />
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M3.5 3a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2A1.5 1.5 0 013.5 2h2a.5.5 0 010 1h-2zM9 2.5a.5.5 0 01.5-.5h2A1.5 1.5 0 0113 3.5v2a.5.5 0 01-1 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5zM2.5 9a.5.5 0 01.5.5v2a.5.5 0 00.5.5h2a.5.5 0 010 1h-2A1.5 1.5 0 012 11.5v-2a.5.5 0 01.5-.5zm10 0a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CornersIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CornersIcon;
