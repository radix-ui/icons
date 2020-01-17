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
          d="M7.50001 2C7.77615 2 8.00001 2.22386 8.00001 2.5L8.00001 12.5C8.00001 12.7761 7.77615 13 7.50001 13C7.22387 13 7.00001 12.7761 7.00001 12.5L7.00001 2.5C7.00001 2.22386 7.22386 2 7.50001 2Z"
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
          d="M7.5 1.5C8.05228 1.5 8.5 1.94772 8.5 2.5L8.5 12.5C8.5 13.0523 8.05229 13.5 7.5 13.5C6.94772 13.5 6.5 13.0523 6.5 12.5L6.5 2.5C6.5 1.94772 6.94772 1.5 7.5 1.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.50001 2C7.77615 2 8.00001 2.22386 8.00001 2.5L8.00001 12.5C8.00001 12.7761 7.77615 13 7.50001 13C7.22387 13 7.00001 12.7761 7.00001 12.5L7.00001 2.5C7.00001 2.22386 7.22386 2 7.50001 2Z"
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
