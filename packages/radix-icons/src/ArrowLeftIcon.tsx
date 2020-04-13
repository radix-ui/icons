import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ArrowLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ArrowLeftIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
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
          d="M7.20711 2.79289C7.59763 3.18342 7.59763 3.81658 7.20711 4.20711L4.91421 6.5H12.5C13.0523 6.5 13.5 6.94772 13.5 7.5C13.5 8.05228 13.0523 8.5 12.5 8.5H4.91421L7.20711 10.7929C7.59763 11.1834 7.59763 11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289 12.2071L1.79289 8.20711C1.40237 7.81658 1.40237 7.18342 1.79289 6.79289L5.79289 2.79289C6.18342 2.40237 6.81658 2.40237 7.20711 2.79289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowLeftIcon;
