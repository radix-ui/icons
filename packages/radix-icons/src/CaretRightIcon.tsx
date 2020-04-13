import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CaretRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CaretRightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.43192 4.43182C6.60766 4.25608 6.89258 4.25608 7.06832 4.43182L9.81832 7.18182C9.90271 7.26621 9.95012 7.38067 9.95012 7.50002C9.95012 7.61937 9.90271 7.73382 9.81832 7.81822L7.06832 10.5682C6.89258 10.744 6.60766 10.744 6.43192 10.5682C6.25618 10.3925 6.25618 10.1076 6.43192 9.93182L8.86372 7.50002L6.43192 5.06822C6.25618 4.89248 6.25618 4.60756 6.43192 4.43182Z"
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
          d="M6.04301 4.04292C6.43354 3.6524 7.0667 3.6524 7.45723 4.04292L10.2072 6.79292C10.3948 6.98046 10.5001 7.23481 10.5001 7.50003C10.5001 7.76525 10.3948 8.0196 10.2072 8.20714L7.45723 10.9571C7.0667 11.3477 6.43354 11.3477 6.04301 10.9571C5.65249 10.5666 5.65249 9.93345 6.04301 9.54292L8.08591 7.50003L6.04301 5.45714C5.65249 5.06661 5.65249 4.43345 6.04301 4.04292Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.43194 4.43182C6.60767 4.25608 6.8926 4.25608 7.06833 4.43182L9.81833 7.18182C9.90272 7.26621 9.95013 7.38067 9.95013 7.50002C9.95013 7.61937 9.90272 7.73382 9.81833 7.81822L7.06833 10.5682C6.8926 10.744 6.60767 10.744 6.43194 10.5682C6.2562 10.3925 6.2562 10.1076 6.43194 9.93182L8.86374 7.50002L6.43194 5.06822C6.2562 4.89248 6.2562 4.60756 6.43194 4.43182Z"
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
