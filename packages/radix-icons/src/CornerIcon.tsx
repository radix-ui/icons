import * as React from 'react';
import { BaseIconProps } from './types';

interface CornerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CornerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CornerIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 4C5.567 4 4 5.567 4 7.5V11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5V7.5C3 5.01472 5.01472 3 7.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CornerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CornerIcon;
