import * as React from 'react';
import { BaseIconProps } from './types';

interface CubeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CubeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CubeIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.27639 1.05279C7.41716 0.982404 7.58284 0.982404 7.72361 1.05279L12.7236 3.55279C12.893 3.63748 13 3.81061 13 4V10.5C13 10.6894 12.893 10.8625 12.7236 10.9472L7.72361 13.4472C7.58284 13.5176 7.41716 13.5176 7.27639 13.4472L2.27639 10.9472C2.107 10.8625 2 10.6894 2 10.5V4C2 3.81061 2.107 3.63748 2.27639 3.55279L7.27639 1.05279ZM3 4.80902L7 6.80902V12.191L3 10.191V4.80902ZM8 12.191L12 10.191V4.80902L8 6.80902V12.191ZM7.5 5.94098L11.382 4L7.5 2.05902L3.61803 4L7.5 5.94098Z"
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
        <path d="M7.5 13L2.5 10.5V4L7.5 1.5L12.5 4V10.5L7.5 13Z" fill={color} opacity=".2" />
        <path
          d="M7.27639 1.05279C7.41716 0.982405 7.58284 0.982405 7.72361 1.05279L12.7236 3.55279C12.893 3.63748 13 3.81061 13 4V10.5C13 10.6894 12.893 10.8625 12.7236 10.9472L7.72361 13.4472C7.58284 13.5176 7.41716 13.5176 7.27639 13.4472L2.27639 10.9472C2.107 10.8625 2 10.6894 2 10.5V4C2 3.81061 2.107 3.63748 2.27639 3.55279L7.27639 1.05279ZM3 4.80902L7 6.80902V12.191L3 10.191V4.80902ZM8 12.191L12 10.191V4.80902L8 6.80902V12.191ZM7.5 5.94098L11.382 4L7.5 2.05902L3.61803 4L7.5 5.94098Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CubeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CubeIcon;
