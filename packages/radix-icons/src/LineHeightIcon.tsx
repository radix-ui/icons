import * as React from 'react';
import { BaseIconProps } from './types';

interface LineHeightIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LineHeightIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LineHeightIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10.5 17.5l-3 3-3-3M10.5 7.5l-3-3-3 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 6.5h7M13.5 10.5h7M13.5 14.5h7M13.5 18.5h4"
          stroke={color}
          strokeLinecap="round"
        />
        <path d="M7.5 4.5v16" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`LineHeightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LineHeightIcon;
