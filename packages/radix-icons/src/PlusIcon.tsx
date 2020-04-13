import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const PlusIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: PlusIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V7H3.5C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8H7V11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5V8H11.5C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7H8V3.5Z"
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
          d="M8.5 3.5V2.5H6.5V3.5V6.5H3.5H2.5V8.5H3.5H6.5V11.5V12.5H8.5V11.5V8.5H11.5H12.5V6.5H11.5H8.5V3.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V7H3.5C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8H7V11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5V8H11.5C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7H8V3.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`PlusIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PlusIcon;
