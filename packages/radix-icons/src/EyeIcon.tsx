import * as React from 'react';
import { BaseIconProps } from './types';

interface EyeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const EyeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: EyeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0)">
          <path
            d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 000 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 000-.53C13.344 4.706 10.692 3 7.5 3zm0 6.5a2 2 0 100-4 2 2 0 000 4z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
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
        <path
          d="M.5 7.5c1.5 2.4 4 4 7 4s5.5-1.6 7-4c-1.5-2.4-4-4-7-4S2 5.1.5 7.5z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <g clipPath="url(#clip0)">
          <path
            d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 000 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 000-.53C13.344 4.706 10.692 3 7.5 3zm0 6.5a2 2 0 100-4 2 2 0 000 4z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`EyeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EyeIcon;
