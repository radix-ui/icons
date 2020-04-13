import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const TriangleRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: TriangleRightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} opacity=".2" />
        <path
          d="M5.56065 11.8983C5.21755 11.7305 5 11.3819 5 11L5 3.99999C5 3.61806 5.21755 3.26948 5.56065 3.10168C5.90375 2.93387 6.31246 2.97616 6.61394 3.21064L11.1139 6.71064C11.3575 6.9001 11.5 7.1914 11.5 7.49999C11.5 7.80858 11.3575 8.09989 11.1139 8.28934L6.61394 11.7893C6.31246 12.0238 5.90375 12.0661 5.56065 11.8983ZM6 9.73313L6 11L7 10.2222L9.68559 8.13342L10.5 7.49999L9.68559 6.86656L7 4.77777L6 3.99999L6 5.26685L6 9.73313Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleRightIcon;
