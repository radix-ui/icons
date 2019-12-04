import * as React from 'react';
import { BaseIconProps } from './types';

interface DotsVerticalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DotsVerticalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DotsVerticalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.625 2.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm0 5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM7.5 13.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
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
          d="M8.625 2.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm0 5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM7.5 13.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.625 2.5a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zM7.5 3.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM9.625 7.5a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zM7.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 6a2.125 2.125 0 100-4.25 2.125 2.125 0 000 4.25zM8.625 12.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DotsVerticalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DotsVerticalIcon;
