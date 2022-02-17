import * as React from 'react';
import { IconProps } from './types';

export const OpenInNewWindowIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13 12C13 12.5523 12.5523 13 12 13H8.5C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12H12V3H3V6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5V3C2 2.44771 2.44771 2 3 2H12C12.5523 2 13 2.44771 13 3V12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M5.5 6.5H8.5V9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12.5L8.5 6.5" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }
);

export default OpenInNewWindowIcon;
