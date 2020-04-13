import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderSolidIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const BorderSolidIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: BorderSolidIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderSolidIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderSolidIcon;
