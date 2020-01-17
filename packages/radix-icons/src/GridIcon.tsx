import * as React from 'react';
import { BaseIconProps } from './types';

interface GridIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const GridIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: GridIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 2.5C2 2.22386 2.22386 2 2.5 2H7H8H12.5C12.7761 2 13 2.22386 13 2.5V7V8V12.5C13 12.7761 12.7761 13 12.5 13H8H7H2.5C2.22386 13 2 12.7761 2 12.5V8V7V2.5ZM3 8V12H7V8H3ZM7 7H3V3H7V7ZM8 8V12H12V8H8ZM12 7H8V3H12V7Z"
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
          d="M7 13V12.5H2.5V8H2V7H2.5V2.5H7V2H8V2.5H12.5V7H13V8H12.5V12.5H8V13H7Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2 2.5C2 2.22386 2.22386 2 2.5 2H7H8H12.5C12.7761 2 13 2.22386 13 2.5V7V8V12.5C13 12.7761 12.7761 13 12.5 13H8H7H2.5C2.22386 13 2 12.7761 2 12.5V8V7V2.5ZM3 8V12H7V8H3ZM7 7H3V3H7V7ZM8 8V12H12V8H8ZM12 7H8V3H12V7Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`GridIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default GridIcon;
