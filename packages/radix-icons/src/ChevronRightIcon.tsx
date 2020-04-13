import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ChevronRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ChevronRightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.64683 3.14628C5.84209 2.95102 6.15867 2.95102 6.35394 3.14628L10.3539 7.14628C10.4477 7.24005 10.5004 7.36722 10.5004 7.49983C10.5004 7.63244 10.4477 7.75962 10.3539 7.85339L6.35393 11.8534C6.15867 12.0486 5.84209 12.0486 5.64683 11.8534C5.45157 11.6581 5.45157 11.3415 5.64683 11.1463L9.29328 7.49983L5.64683 3.85339C5.45157 3.65812 5.45157 3.34154 5.64683 3.14628Z"
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
          d="M5.29326 2.79272C5.68378 2.4022 6.31695 2.4022 6.70747 2.79273L10.7075 6.79273C10.895 6.98026 11.0004 7.23462 11.0004 7.49983C11.0004 7.76505 10.895 8.0194 10.7075 8.20694L6.70747 12.2069C6.31695 12.5975 5.68378 12.5975 5.29326 12.2069C4.90274 11.8164 4.90274 11.1832 5.29326 10.7927L8.58615 7.49983L5.29326 4.20694C4.90274 3.81641 4.90274 3.18325 5.29326 2.79272Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.64681 3.14628C5.84208 2.95102 6.15866 2.95102 6.35392 3.14628L10.3539 7.14628C10.4477 7.24005 10.5004 7.36722 10.5004 7.49983C10.5004 7.63244 10.4477 7.75962 10.3539 7.85339L6.35392 11.8534C6.15866 12.0486 5.84207 12.0486 5.64681 11.8534C5.45155 11.6581 5.45155 11.3415 5.64681 11.1463L9.29326 7.49983L5.64681 3.85338C5.45155 3.65812 5.45155 3.34154 5.64681 3.14628Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronRightIcon;
