import * as React from 'react';
import { BaseIconProps } from './types';

interface LinkHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LinkHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LinkHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.625 4h-.06c-.523 0-.858 0-1.147.055C1.238 4.28.298 5.17.058 6.33 0 6.613 0 6.94 0 7.437v.126c0 .497 0 .824.058 1.106.24 1.16 1.18 2.05 2.36 2.276.29.055.624.055 1.146.055H5.5a.5.5 0 000-1H3.625c-.604 0-.836-.003-1.019-.038-.803-.153-1.414-.751-1.568-1.495C1.003 8.297 1 8.082 1 7.5c0-.583.003-.798.038-.967.154-.744.765-1.343 1.568-1.496C2.789 5.002 3.021 5 3.625 5H5.5a.5.5 0 000-1H3.625zm7.75 1c.604 0 .835.002 1.019.037.803.153 1.414.752 1.568 1.496.035.169.038.384.038.967 0 .582-.003.798-.038.967-.154.744-.765 1.342-1.568 1.495-.184.035-.415.038-1.02.038H9.5a.5.5 0 100 1h1.935c.523 0 .857 0 1.146-.055 1.18-.226 2.12-1.116 2.36-2.276C15 8.387 15 8.06 15 7.563v-.126c0-.497 0-.824-.058-1.107-.24-1.16-1.18-2.05-2.36-2.275C12.293 4 11.958 4 11.435 4H9.5a.5.5 0 100 1h1.875zM4.5 7a.5.5 0 100 1h6a.5.5 0 100-1h-6z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LinkHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LinkHorizontalIcon;
