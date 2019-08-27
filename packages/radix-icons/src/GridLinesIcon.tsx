import * as React from 'react';
import { BaseIconProps } from './types';

interface GridLinesIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const GridLinesIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: GridLinesIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 8.5h16M8.5 20.5v-16M16.5 20.5v-16M4.5 16.5h16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`GridLinesIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default GridLinesIcon;
