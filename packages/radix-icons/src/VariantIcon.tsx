import * as React from 'react';
import { BaseIconProps } from './types';

interface VariantIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const VariantIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: VariantIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.147 1.49a.5.5 0 01.707 0l5.657 5.656a.5.5 0 010 .707L7.854 13.51a.5.5 0 01-.707 0L1.49 7.853a.5.5 0 010-.707L7.147 1.49zM7.5 2.55L2.55 7.5l4.95 4.95 4.95-4.95L7.5 2.55z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`VariantIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VariantIcon;
