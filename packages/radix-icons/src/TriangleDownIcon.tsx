import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6h7l-3.5 4.5L4 6z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path d="M4 6h7l-3.5 4.5L4 6z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <mask id="a" maskUnits="userSpaceOnUse" x="3" y="5" width="9" height="7" fill={color}>
          <path fill={color} d="M3 5h9v7H3z" />
          <path d="M4 6h7l-3.5 4.5L4 6z" />
        </mask>
        <path
          d="M4 6V5a1 1 0 00-.79 1.614L4 6zm7 0l.79.614A1 1 0 0011 5v1zm-3.5 4.5l-.79.614a1 1 0 001.58 0L7.5 10.5zM4 7h7V5H4v2zm6.21-1.614l-3.5 4.5 1.58 1.228 3.5-4.5-1.58-1.228zm-1.92 4.5l-3.5-4.5-1.58 1.228 3.5 4.5 1.58-1.228z"
          fill={color}
          mask="url(#a)"
        />
      </svg>
    );
  }

  console.error(`TriangleDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleDownIcon;
