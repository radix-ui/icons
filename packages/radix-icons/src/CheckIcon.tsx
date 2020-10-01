import * as React from 'react';
import { IconProps } from './types';

export const CheckIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.4669 3.72686C11.7558 3.91576 11.8369 4.30309 11.648 4.592L7.39802 11.092C7.29786 11.2452 7.13559 11.3468 6.95405 11.3699C6.7725 11.3931 6.58992 11.3355 6.45449 11.2124L3.70449 8.71243C3.44908 8.48024 3.43026 8.08496 3.66245 7.82954C3.89464 7.57413 4.28992 7.55531 4.54533 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.4669 3.72686Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckIcon;
