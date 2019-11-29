import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderSolidIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderSolidIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderSolidIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.25 7.5a.5.5 0 01.5-.5h11.5a.5.5 0 010 1H1.75a.5.5 0 01-.5-.5z"
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
