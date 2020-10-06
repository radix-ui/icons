import * as React from 'react';
import { IconProps } from './types';

export const CubeIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M7.25904 1.31189C7.40908 1.22937 7.59092 1.22937 7.74096 1.31189L12.741 4.06189C12.9007 4.14977 13 4.31765 13 4.5V10.25C13 10.4323 12.9007 10.6002 12.741 10.6881L7.74096 13.4381C7.59092 13.5206 7.40908 13.5206 7.25904 13.4381L2.25904 10.6881C2.09927 10.6002 2 10.4323 2 10.25V4.5C2 4.31765 2.09927 4.14977 2.25904 4.06189L7.25904 1.31189ZM3 5.34564L7 7.54564V12.1544L3 9.95436V5.34564ZM8 12.1544L12 9.95436V5.34564L8 7.54564V12.1544ZM7.5 6.67936L11.4625 4.5L7.5 2.32064L3.53752 4.5L7.5 6.67936Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CubeIcon;
