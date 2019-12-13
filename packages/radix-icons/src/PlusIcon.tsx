import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const PlusIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: PlusIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 3.5a.5.5 0 00-1 0V7H3.5a.5.5 0 000 1H7v3.5a.5.5 0 001 0V8h3.5a.5.5 0 000-1H8V3.5z"
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
          d="M8.5 3.5v-1h-2v4h-4v2h4v4h2v-4h4v-2h-4v-3z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 3.5a.5.5 0 00-1 0V7H3.5a.5.5 0 000 1H7v3.5a.5.5 0 001 0V8h3.5a.5.5 0 000-1H8V3.5z"
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
