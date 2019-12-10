import * as React from 'react';
import { BaseIconProps } from './types';

interface DotsHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DotsHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DotsHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm5 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
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
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path
            d="M3.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm5 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M4.625 7.5a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zM2.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM9.625 7.5a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zM7.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm5 1a2.125 2.125 0 100-4.25 2.125 2.125 0 000 4.25zM13.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DotsHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DotsHorizontalIcon;
