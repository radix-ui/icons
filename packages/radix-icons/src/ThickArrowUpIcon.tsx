import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ThickArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ThickArrowUpIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2C7.66148 2 7.81301 2.07798 7.90687 2.20938L12.9069 9.20938C13.0157 9.36179 13.0303 9.56226 12.9446 9.72879C12.8589 9.89533 12.6873 10 12.5 10H10V12.5C10 12.7761 9.77614 13 9.5 13H5.5C5.22386 13 5 12.7761 5 12.5V10H2.5C2.31271 10 2.14112 9.89533 2.05542 9.72879C1.96972 9.56226 1.98427 9.36179 2.09314 9.20938L7.09314 2.20938C7.18699 2.07798 7.33853 2 7.5 2ZM3.4716 9H5.5C5.77614 9 6 9.22386 6 9.5V12H9V9.5C9 9.22386 9.22386 9 9.5 9H11.5284L7.5 3.36023L3.4716 9Z"
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
        <path d="M7.5 2.5L12.5 9.5H9.5V12.5H5.5V9.5H2.5L7.5 2.5Z" fill={color} opacity=".2" />
        <path
          d="M7.5 2C7.66148 2 7.81301 2.07798 7.90687 2.20938L12.9069 9.20938C13.0157 9.36179 13.0303 9.56226 12.9446 9.72879C12.8589 9.89533 12.6873 10 12.5 10H10V12.5C10 12.7761 9.77614 13 9.5 13H5.5C5.22386 13 5 12.7761 5 12.5V10H2.5C2.31271 10 2.14112 9.89533 2.05542 9.72879C1.96972 9.56226 1.98427 9.36179 2.09314 9.20938L7.09314 2.20938C7.18699 2.07798 7.33853 2 7.5 2ZM3.4716 9H5.5C5.77614 9 6 9.22386 6 9.5V12H9V9.5C9 9.22386 9.22386 9 9.5 9H11.5284L7.5 3.36023L3.4716 9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ThickArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ThickArrowUpIcon;
