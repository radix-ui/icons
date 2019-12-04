import * as React from 'react';
import { BaseIconProps } from './types';

interface BackpackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BackpackIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BackpackIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 3a1 1 0 011-1h3a1 1 0 011 1v1h2a1 1 0 011 1v2c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 013 11.5V9.236A2.993 2.993 0 012 7V5a1 1 0 011-1h2V3zm4 0v1H6V3h3zM3 5h9v2a1.996 1.996 0 01-2 2H8v-.5a.5.5 0 00-1 0V9H5a1.996 1.996 0 01-2-2V5zm4 5H5c-.35 0-.687-.06-1-.17v1.67a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V9.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 01-1 0V10z"
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
          d="M9 2.5H6a.5.5 0 00-.5.5v1.5H3a.5.5 0 00-.5.5v2c0 .818.393 1.544 1 2v2.5a1 1 0 001 1h6a1 1 0 001-1V9c.607-.456 1-1.182 1-2V5a.5.5 0 00-.5-.5H9.5V3a.5.5 0 00-.5-.5z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5 3a1 1 0 011-1h3a1 1 0 011 1v1h2a1 1 0 011 1v2c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 013 11.5V9.236A2.993 2.993 0 012 7V5a1 1 0 011-1h2V3zm4 0v1H6V3h3zM3 5h9v2a1.996 1.996 0 01-2 2H8v-.5a.5.5 0 00-1 0V9H5a1.996 1.996 0 01-2-2V5zm4 5H5c-.35 0-.687-.06-1-.17v1.67a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V9.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 01-1 0V10z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BackpackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BackpackIcon;
