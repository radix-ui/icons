import * as React from 'react';
import { IconProps } from './types';

export const CaretLeftIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M8.81808 4.18176C8.99382 4.3575 8.99382 4.64242 8.81808 4.81816L6.13628 7.49996L8.81808 10.1818C8.99382 10.3575 8.99382 10.6424 8.81808 10.8182C8.64235 10.9939 8.35742 10.9939 8.18169 10.8182L5.18169 7.81816C5.0973 7.73377 5.04989 7.61931 5.04989 7.49996C5.04989 7.38061 5.0973 7.26615 5.18169 7.18176L8.18169 4.18176C8.35742 4.00603 8.64235 4.00603 8.81808 4.18176Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CaretLeftIcon;
