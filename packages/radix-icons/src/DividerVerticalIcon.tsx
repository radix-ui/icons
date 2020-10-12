import * as React from 'react';
import { IconProps } from './types';

export const DividerVerticalIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.50001 2C7.77615 2 8.00001 2.22386 8.00001 2.5L8.00001 12.5C8.00001 12.7761 7.77615 13 7.50001 13C7.22387 13 7.00001 12.7761 7.00001 12.5L7.00001 2.5C7.00001 2.22386 7.22386 2 7.50001 2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DividerVerticalIcon;
