import * as React from 'react';
import { IconProps } from './types';

// ✅
export const DirectoryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V5C13 4.72386 12.7761 4.5 12.5 4.5H9.5H7.83333C7.50878 4.5 7.19298 4.39473 6.93333 4.2L5.33333 3H2.5C2.22386 3 2 3.22386 2 3.5L2 6.5L2 11.5ZM2.5 13C1.67157 13 1 12.3284 1 11.5L1 6.5L1 3.5C1 2.67157 1.67157 2 2.5 2H5.41667C5.57894 2 5.73684 2.05263 5.86667 2.15L7.53333 3.4C7.61988 3.46491 7.72515 3.5 7.83333 3.5H9.5H12.5C13.3284 3.5 14 4.17157 14 5V11.5C14 12.3284 13.3284 13 12.5 13H2.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DirectoryIcon;
