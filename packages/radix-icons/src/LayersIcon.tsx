import * as React from 'react';
import { IconProps } from './types';

export const LayersIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M7.75435 0.819537C7.59745 0.726821 7.40253 0.726821 7.24563 0.819537L1.74563 4.06954C1.59339 4.15949 1.49999 4.32317 1.49999 4.5C1.49999 4.67683 1.59339 4.84051 1.74563 4.93046L7.24563 8.18046C7.40253 8.27318 7.59745 8.27318 7.75435 8.18046L13.2544 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2544 4.06954L7.75435 0.819537ZM7.49999 7.16923L2.98283 4.5L7.49999 1.83077L12.0171 4.5L7.49999 7.16923ZM1.56953 7.49564C1.71001 7.2579 2.01662 7.17906 2.25435 7.31954L7.49999 10.4192L12.7456 7.31954C12.9834 7.17906 13.29 7.2579 13.4305 7.49564C13.5709 7.73337 13.4921 8.03998 13.2544 8.18046L7.75435 11.4305C7.59745 11.5232 7.40253 11.5232 7.24563 11.4305L1.74563 8.18046C1.50789 8.03998 1.42904 7.73337 1.56953 7.49564ZM1.56952 10.4956C1.71001 10.2579 2.01661 10.1791 2.25435 10.3195L7.49999 13.4192L12.7456 10.3195C12.9834 10.1791 13.29 10.2579 13.4305 10.4956C13.5709 10.7334 13.4921 11.04 13.2544 11.1805L7.75435 14.4305C7.59745 14.5232 7.40253 14.5232 7.24562 14.4305L1.74562 11.1805C1.50788 11.04 1.42904 10.7334 1.56952 10.4956Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LayersIcon;
