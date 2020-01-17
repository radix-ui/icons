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
          d="M3.5 3C3.22386 3 3 3.22386 3 3.5V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V3.5C2 2.67157 2.67157 2 3.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H11.5C12.3284 2 13 2.67157 13 3.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.5C12 3.22386 11.7761 3 11.5 3H9.5C9.22386 3 9 2.77614 9 2.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V11.5C3 11.7761 3.22386 12 3.5 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H3.5C2.67157 13 2 12.3284 2 11.5V9.5C2 9.22386 2.22386 9 2.5 9ZM12.5 9C12.7761 9 13 9.22386 13 9.5V11.5C13 12.3284 12.3284 13 11.5 13H9.5C9.22386 13 9 12.7761 9 12.5C9 12.2239 9.22386 12 9.5 12H11.5C11.7761 12 12 11.7761 12 11.5V9.5C12 9.22386 12.2239 9 12.5 9Z"
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
          d="M3.5 3C3.22386 3 3 3.22386 3 3.5V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V3.5C2 2.67157 2.67157 2 3.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H11.5C12.3284 2 13 2.67157 13 3.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.5C12 3.22386 11.7761 3 11.5 3H9.5C9.22386 3 9 2.77614 9 2.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V11.5C3 11.7761 3.22386 12 3.5 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H3.5C2.67157 13 2 12.3284 2 11.5V9.5C2 9.22386 2.22386 9 2.5 9ZM12.5 9C12.7761 9 13 9.22386 13 9.5V11.5C13 12.3284 12.3284 13 11.5 13H9.5C9.22386 13 9 12.7761 9 12.5C9 12.2239 9.22386 12 9.5 12H11.5C11.7761 12 12 11.7761 12 11.5V9.5C12 9.22386 12.2239 9 12.5 9Z"
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
