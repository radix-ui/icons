import * as React from 'react';
import { IconProps } from './types';

export const TriangleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} />
      </svg>
    );
  }
);

export default TriangleRightIcon;
