import * as React from 'react';
import { BaseIconProps } from './types';

interface CheckIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CheckIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CheckIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.809 3.20375C12.3868 3.58155 12.5489 4.35622 12.1711 4.93403L7.92113 11.434C7.72081 11.7404 7.39628 11.9436 7.03318 11.9899C6.67009 12.0363 6.30492 11.9211 6.03408 11.6749L3.28408 9.17489C2.77325 8.71051 2.73561 7.91994 3.19999 7.40912C3.66438 6.8983 4.45494 6.86066 4.96576 7.32504L6.63099 8.83888L10.0787 3.5659C10.4565 2.9881 11.2312 2.82596 11.809 3.20375Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.4669 3.72686C11.7558 3.91576 11.8369 4.30309 11.648 4.592L7.39802 11.092C7.29786 11.2452 7.13559 11.3468 6.95405 11.3699C6.7725 11.3931 6.58992 11.3355 6.45449 11.2124L3.70449 8.71243C3.44908 8.48024 3.43026 8.08496 3.66245 7.82954C3.89464 7.57413 4.28992 7.55531 4.54533 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.4669 3.72686Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CheckIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CheckIcon;
