import * as React from 'react';
import { IconProps } from './types';

export const ComponentInstanceIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M7.1465 1.48957C7.34176 1.29431 7.65835 1.29431 7.85361 1.48957L13.5105 7.14643C13.7057 7.34169 13.7057 7.65827 13.5105 7.85353L7.85361 13.5104C7.65835 13.7056 7.34176 13.7056 7.1465 13.5104L1.48965 7.85353C1.29439 7.65827 1.29439 7.34169 1.48965 7.14643L7.1465 1.48957ZM7.50005 2.55023L2.55031 7.49998L7.50005 12.4497L12.4498 7.49998L7.50005 2.55023Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ComponentInstanceIcon;
