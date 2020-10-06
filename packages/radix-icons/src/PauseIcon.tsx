import * as React from 'react';
import { IconProps } from './types';

export const PauseIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M6.04998 2.75001C6.04998 2.44626 5.80374 2.20001 5.49998 2.20001C5.19623 2.20001 4.94998 2.44626 4.94998 2.75001V12.25C4.94998 12.5538 5.19623 12.8 5.49998 12.8C5.80374 12.8 6.04998 12.5538 6.04998 12.25V2.75001ZM10.05 2.75001C10.05 2.44626 9.80374 2.20001 9.49998 2.20001C9.19623 2.20001 8.94998 2.44626 8.94998 2.75001V12.25C8.94998 12.5538 9.19623 12.8 9.49998 12.8C9.80374 12.8 10.05 12.5538 10.05 12.25V2.75001Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PauseIcon;
