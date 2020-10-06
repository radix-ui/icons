import * as React from 'react';
import { IconProps } from './types';

export const ColumnsIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M2.15 14V1H0.85V14H2.15ZM6.15 14V1H4.85V14H6.15ZM10.15 1V14H8.85V1H10.15ZM14.15 14V1H12.85V14H14.15Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ColumnsIcon;
