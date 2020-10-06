import * as React from 'react';
import { IconProps } from './types';

export const CaretDownIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M4.18181 6.18181C4.35754 6.00608 4.64247 6.00608 4.8182 6.18181L7.5 8.86362L10.1818 6.18181C10.3575 6.00608 10.6425 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.8182 9.81821C7.73381 9.9026 7.61935 9.95001 7.5 9.95001C7.38066 9.95001 7.2662 9.9026 7.18181 9.81821L4.1818 6.81821C4.00607 6.64247 4.00607 6.35755 4.18181 6.18181Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CaretDownIcon;
