import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ThickArrowDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ThickArrowDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V5h2.5a.5.5 0 01.407.79l-5 7a.5.5 0 01-.814 0l-5-7A.5.5 0 012.5 5H5V2.5zM6 3v2.5a.5.5 0 01-.5.5H3.472L7.5 11.64 11.528 6H9.5a.5.5 0 01-.5-.5V3H6z"
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
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path d="M9.5 2.5h-4v3h-3l5 7 5-7h-3v-3z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M5 2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V5h2.5a.5.5 0 01.407.79l-5 7a.5.5 0 01-.814 0l-5-7A.5.5 0 012.5 5H5V2.5zM6 3v2.5a.5.5 0 01-.5.5H3.472L7.5 11.64 11.528 6H9.5a.5.5 0 01-.5-.5V3H6z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ThickArrowDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ThickArrowDownIcon;
