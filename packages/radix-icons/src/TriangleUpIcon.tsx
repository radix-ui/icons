import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9h7L7.5 4.5 4 9z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path d="M4 9h7L7.5 4.5 4 9z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <mask id="a" maskUnits="userSpaceOnUse" x="3" y="3" width="9" height="7" fill={color}>
          <path fill={color} d="M3 3h9v7H3z" />
          <path d="M4 9h7L7.5 4.5 4 9z" />
        </mask>
        <path
          d="M4 9v1a1 1 0 01-.79-1.614L4 9zm7 0l.79-.614A1 1 0 0111 10V9zM7.5 4.5l-.79-.614a1 1 0 011.58 0L7.5 4.5zM4 8h7v2H4V8zm6.21 1.614l-3.5-4.5 1.58-1.228 3.5 4.5-1.58 1.228zm-1.92-4.5l-3.5 4.5-1.58-1.228 3.5-4.5 1.58 1.228z"
          fill={color}
          mask="url(#a)"
        />
      </svg>
    );
  }

  console.error(`TriangleUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleUpIcon;
