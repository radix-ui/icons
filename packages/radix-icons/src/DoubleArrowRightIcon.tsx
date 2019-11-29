import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const DoubleArrowRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.146 11.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L5.793 7.5l-3.647 3.646zm6 0a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L11.793 7.5l-3.647 3.646z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowRightIcon;
