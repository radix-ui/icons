import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0)">
          <path d="M6 11V4l4.5 3.5L6 11z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".15" clipPath="url(#clip0)">
          <path d="M6 11V4l4.5 3.5L6 11z" fill={color} />
        </g>
        <g clipPath="url(#clip1)">
          <mask id="a" maskUnits="userSpaceOnUse" x="5" y="3" width="7" height="9" fill={color}>
            <path fill={color} d="M5 3h7v9H5z" />
            <path d="M6 11V4l4.5 3.5L6 11z" />
          </mask>
          <path
            d="M6 11H5a1 1 0 001.614.79L6 11zm0-7l.614-.79A1 1 0 005 4h1zm4.5 3.5l.614.79a1 1 0 000-1.58l-.614.79zM7 11V4H5v7h2zM5.386 4.79l4.5 3.5 1.228-1.58-4.5-3.5-1.228 1.58zm4.5 1.92l-4.5 3.5 1.228 1.58 4.5-3.5-1.228-1.58z"
            fill={color}
            mask="url(#a)"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} d="M0 0h15v15H0z" />
          </clipPath>
          <clipPath id="clip1">
            <path fill={color} d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`TriangleRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleRightIcon;
