import * as React from 'react';
import { BaseIconProps } from './types';

interface VariantBooleanIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const VariantBooleanIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: VariantBooleanIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.854 1.49a.5.5 0 00-.707 0L1.49 7.146a.5.5 0 000 .708l5.657 5.656a.5.5 0 00.707 0l5.657-5.656a.5.5 0 000-.708L7.854 1.49zM7.5 2.55L2.55 7.5l4.95 4.95v-9.9z"
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
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path d="M7.5 1.843L13.157 7.5 7.5 13.157 1.843 7.5 7.5 1.843z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M7.854 1.49a.5.5 0 00-.707 0L1.49 7.146a.5.5 0 000 .708l5.657 5.656a.5.5 0 00.707 0l5.657-5.656a.5.5 0 000-.708L7.854 1.49zM7.5 2.55L2.55 7.5l4.95 4.95v-9.9z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`VariantBooleanIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VariantBooleanIcon;
