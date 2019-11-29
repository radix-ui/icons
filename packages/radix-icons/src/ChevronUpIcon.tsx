import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ChevronUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.146 9.354a.5.5 0 00.708 0L7.5 5.707l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronUpIcon;
