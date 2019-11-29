import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4 2.9h8.1v9.2H4V2.9zM4 2h9v11H2V2h2z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderLeftIcon;
