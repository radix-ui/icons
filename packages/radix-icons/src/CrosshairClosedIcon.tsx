import * as React from 'react';
import { BaseIconProps } from './types';

interface CrosshairClosedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CrosshairClosedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CrosshairClosedIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 .5a.5.5 0 00-1 0v2.527A4.502 4.502 0 003.027 7H.5a.5.5 0 000 1h2.527A4.502 4.502 0 007 11.973V14.5a.5.5 0 001 0v-2.527A4.502 4.502 0 0011.973 8H14.5a.5.5 0 000-1h-2.527A4.502 4.502 0 008 3.027V.5zM7 4.035A3.502 3.502 0 004.035 7H7V4.035zM8 7V4.035A3.502 3.502 0 0110.965 7H8zM7 8H4.035A3.502 3.502 0 007 10.965V8zm1 2.965V8h2.965A3.502 3.502 0 018 10.965z"
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
          <path
            d="M8 .5a.5.5 0 00-1 0v2.527A4.502 4.502 0 003.027 7H.5a.5.5 0 000 1h2.527A4.502 4.502 0 007 11.973V14.5a.5.5 0 001 0v-2.527A4.502 4.502 0 0011.973 8H14.5a.5.5 0 000-1h-2.527A4.502 4.502 0 008 3.027V.5z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M8 .5a.5.5 0 00-1 0v2.527A4.502 4.502 0 003.027 7H.5a.5.5 0 000 1h2.527A4.502 4.502 0 007 11.973V14.5a.5.5 0 001 0v-2.527A4.502 4.502 0 0011.973 8H14.5a.5.5 0 000-1h-2.527A4.502 4.502 0 008 3.027V.5zM7 4.035A3.502 3.502 0 004.035 7H7V4.035zM8 7V4.035A3.502 3.502 0 0110.965 7H8zM7 8H4.035A3.502 3.502 0 007 10.965V8zm1 2.965V8h2.965A3.502 3.502 0 018 10.965z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CrosshairClosedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CrosshairClosedIcon;
