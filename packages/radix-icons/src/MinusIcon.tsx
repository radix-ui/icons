import * as React from 'react';
import { BaseIconProps } from './types';

interface MinusIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const MinusIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: MinusIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H12C12.2761 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2761 8 12 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z"
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
          d="M2 6.5H3H12H13V8.5H12H3H2V6.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H12C12.2761 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2761 8 12 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MinusIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MinusIcon;
