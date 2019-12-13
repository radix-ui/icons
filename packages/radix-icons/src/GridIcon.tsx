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
          d="M2 2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10zM3 8v4h4V8H3zm4-1H3V3h4v4zm1 1v4h4V8H8zm4-1H8V3h4v4z"
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
          d="M7 13v-.5H2.5V8H2V7h.5V2.5H7V2h1v.5h4.5V7h.5v1h-.5v4.5H8v.5H7z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2 2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10zM3 8v4h4V8H3zm4-1H3V3h4v4zm1 1v4h4V8H8zm4-1H8V3h4v4z"
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
