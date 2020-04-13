import * as React from 'react';
import { BaseIconProps } from './types';

interface InfoCircledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const InfoCircledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: InfoCircledIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.49988 0.876892C3.84219 0.876892 0.877045 3.84204 0.877045 7.49972C0.877045 11.1574 3.84219 14.1226 7.49988 14.1226C11.1575 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1575 0.876892 7.49988 0.876892ZM1.82704 7.49972C1.82704 4.36671 4.36686 1.82689 7.49988 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49988 13.1726C4.36686 13.1726 1.82704 10.6327 1.82704 7.49972ZM8.24989 4.49999C8.24989 4.9142 7.9141 5.24999 7.49989 5.24999C7.08568 5.24999 6.74989 4.9142 6.74989 4.49999C6.74989 4.08577 7.08568 3.74999 7.49989 3.74999C7.9141 3.74999 8.24989 4.08577 8.24989 4.49999ZM6 5.99999H6.5H7.5C7.77615 5.99999 8 6.22384 8 6.49999V9.99999H8.5H9V11H8.5H7.5H6.5H6V9.99999H6.5H7V6.99999H6.5H6V5.99999Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`InfoCircledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InfoCircledIcon;
