import * as React from 'react';
import { BaseIconProps } from './types';

interface DividerVerticalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DividerVerticalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DividerVerticalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10a.5.5 0 01.5-.5z"
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
          d="M7.5 1.5a1 1 0 011 1v10a1 1 0 11-2 0v-10a1 1 0 011-1z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 2a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10a.5.5 0 01.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DividerVerticalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DividerVerticalIcon;
