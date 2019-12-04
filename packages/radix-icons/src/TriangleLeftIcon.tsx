import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0)">
          <path d="M9 4v7L4.5 7.5 9 4z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} transform="rotate(-180 7.5 7.5)" d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".15" clipPath="url(#clip0)">
          <path d="M9 4v7L4.5 7.5 9 4z" fill={color} />
        </g>
        <g clipPath="url(#clip1)">
          <mask id="a" maskUnits="userSpaceOnUse" x="3" y="3" width="7" height="9" fill={color}>
            <path fill={color} d="M3 3h7v9H3z" />
            <path d="M9 4v7L4.5 7.5 9 4z" />
          </mask>
          <path
            d="M9 4h1a1 1 0 00-1.614-.79L9 4zm0 7l-.614.79A1 1 0 0010 11H9zM4.5 7.5l-.614-.79a1 1 0 000 1.58L4.5 7.5zM8 4v7h2V4H8zm1.614 6.21l-4.5-3.5-1.228 1.58 4.5 3.5 1.228-1.58zm-4.5-1.92l4.5-3.5-1.228-1.58-4.5 3.5 1.228 1.58z"
            fill={color}
            mask="url(#a)"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} transform="rotate(-180 7.5 7.5)" d="M0 0h15v15H0z" />
          </clipPath>
          <clipPath id="clip1">
            <path fill={color} transform="rotate(-180 7.5 7.5)" d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`TriangleLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleLeftIcon;
