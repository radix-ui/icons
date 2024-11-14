import * as React from 'react';
import { IconProps } from './types';

// ✅
export const DirectoryOpenFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.1361 7.14524L2 7.78036L2 6.5L2 3.5C2 3.22386 2.22386 3 2.5 3H5.33333L6.93333 4.2C7.19298 4.39473 7.50878 4.5 7.83333 4.5H9.5H11.5C11.7761 4.5 12 4.72386 12 5L3.80842 5C3.10111 5 2.48991 5.4941 2.34171 6.18571L2.1361 7.14524ZM13 5V5.01844C13.832 5.14952 14.4129 5.95961 14.2297 6.81429L13.1583 11.8143C13.0101 12.5059 12.3989 13 11.6916 13H2.5C1.67157 13 1 12.3284 1 11.5L1 6.5L1 3.5C1 2.67157 1.67157 2 2.5 2H5.41667C5.57894 2 5.73684 2.05263 5.86667 2.15L7.53333 3.4C7.61988 3.46491 7.72515 3.5 7.83333 3.5H9.5H11.5C12.3284 3.5 13 4.17157 13 5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DirectoryOpenFilledIcon;
