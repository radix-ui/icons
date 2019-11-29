import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11 12V3H3v9h8zM2 2h11v11H2V2z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderRightIcon;
