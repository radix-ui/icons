import * as React from 'react';
import { BaseIconProps } from './types';

interface CalendarIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CalendarIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CalendarIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 1a.5.5 0 01.5.5V2h5v-.5a.5.5 0 011 0V2h1.5A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-9A1.5 1.5 0 012.5 2H4v-.5a.5.5 0 01.5-.5zM10 3v.5a.5.5 0 001 0V3h1.5a.5.5 0 01.5.5V5H2V3.5a.5.5 0 01.5-.5H4v.5a.5.5 0 001 0V3h5zM2 6v6.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V6H2zm5 1.5a.5.5 0 111 0 .5.5 0 01-1 0zM9.5 7a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm.5 1.5a.5.5 0 100 1 .5.5 0 000-1zM9 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM7.5 9a.5.5 0 100 1 .5.5 0 000-1zM5 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM3.5 9a.5.5 0 100 1 .5.5 0 000-1zM3 11.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CalendarIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CalendarIcon;
