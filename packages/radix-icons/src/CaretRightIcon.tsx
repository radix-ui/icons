import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.93192 4.93184C7.10766 4.7561 7.39258 4.7561 7.56832 4.93184L9.81832 7.18184C9.90271 7.26623 9.95012 7.38069 9.95012 7.50003C9.95012 7.61938 9.90271 7.73384 9.81832 7.81823L7.56832 10.0682C7.39258 10.244 7.10766 10.244 6.93192 10.0682C6.75618 9.8925 6.75618 9.60757 6.93192 9.43184L8.86372 7.50003L6.93192 5.56823C6.75618 5.3925 6.75618 5.10757 6.93192 4.93184Z"
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
          d="M6.54301 4.54292C6.93354 4.1524 7.5667 4.1524 7.95723 4.54292L10.2072 6.79292C10.3948 6.98046 10.5001 7.23481 10.5001 7.50003C10.5001 7.76525 10.3948 8.0196 10.2072 8.20714L7.95723 10.4571C7.5667 10.8477 6.93354 10.8477 6.54301 10.4571C6.15249 10.0666 6.15249 9.43345 6.54302 9.04292L8.08591 7.50003L6.54301 5.95714C6.15249 5.56661 6.15249 4.93345 6.54301 4.54292Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.93194 4.93184C7.10767 4.7561 7.3926 4.7561 7.56833 4.93184L9.81833 7.18184C9.90272 7.26623 9.95013 7.38069 9.95013 7.50003C9.95013 7.61938 9.90272 7.73384 9.81833 7.81823L7.56833 10.0682C7.3926 10.244 7.10767 10.244 6.93194 10.0682C6.7562 9.8925 6.7562 9.60757 6.93194 9.43184L8.86374 7.50003L6.93194 5.56823C6.7562 5.3925 6.7562 5.10757 6.93194 4.93184Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretRightIcon;
