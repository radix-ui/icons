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
          d="M8 .5a.5.5 0 00-1 0v2.655A4.375 4.375 0 003.155 7H.5a.5.5 0 000 1h2.655A4.375 4.375 0 007 11.845V14.5a.5.5 0 001 0v-2.656A4.375 4.375 0 0011.844 8H14.5a.5.5 0 000-1h-2.655A4.375 4.375 0 008 3.155V.5zM7 4.113A3.425 3.425 0 004.113 7H7V4.113zM8 7V4.113A3.425 3.425 0 0110.886 7H8zM7 8H4.113A3.425 3.425 0 007 10.886V8zm1 2.886V8h2.886A3.425 3.425 0 018 10.886z"
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
          d="M8 .5a.5.5 0 00-1 0v2.655A4.375 4.375 0 003.155 7H.5a.5.5 0 000 1h2.655A4.375 4.375 0 007 11.845V14.5a.5.5 0 001 0v-2.656A4.375 4.375 0 0011.844 8H14.5a.5.5 0 000-1h-2.655A4.375 4.375 0 008 3.155V.5zM7 4.113A3.425 3.425 0 004.113 7H7V4.113zM8 7V4.113A3.425 3.425 0 0110.886 7H8zM7 8H4.113A3.425 3.425 0 007 10.886V8zm1 2.886V8h2.886A3.425 3.425 0 018 10.886z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 .5a.5.5 0 00-1 0v2.655A4.375 4.375 0 003.155 7H.5a.5.5 0 000 1h2.655A4.375 4.375 0 007 11.845V14.5a.5.5 0 001 0v-2.656A4.375 4.375 0 0011.844 8H14.5a.5.5 0 000-1h-2.655A4.375 4.375 0 008 3.155V.5zM7 4.113A3.425 3.425 0 004.113 7H7V4.113zM8 7V4.113A3.425 3.425 0 0110.886 7H8zM7 8H4.113A3.425 3.425 0 007 10.886V8zm1 2.886V8h2.886A3.425 3.425 0 018 10.886z"
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
