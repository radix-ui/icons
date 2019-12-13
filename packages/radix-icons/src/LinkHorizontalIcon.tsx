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
          d="M4.625 4h-.061c-.523 0-.857 0-1.146.055-1.18.225-2.12 1.116-2.36 2.275C1 6.613 1 6.94 1 7.437v.126c0 .497 0 .824.058 1.107.24 1.16 1.18 2.05 2.36 2.275.289.055.623.055 1.146.055H5.5a.5.5 0 100-1h-.875c-.604 0-.836-.002-1.02-.037-.802-.154-1.413-.752-1.568-1.496C2.002 8.297 2 8.083 2 7.5c0-.582.002-.798.037-.967.155-.744.766-1.342 1.569-1.496C3.789 5.002 4.02 5 4.625 5H5.5a.5.5 0 000-1h-.875zm5.75 1c.604 0 .835.002 1.019.037.803.154 1.414.752 1.568 1.496.035.17.038.385.038.967 0 .583-.003.798-.038.967-.154.744-.765 1.342-1.568 1.496-.184.035-.415.037-1.02.037H9.5a.5.5 0 000 1h.935c.523 0 .857 0 1.146-.055 1.18-.225 2.12-1.116 2.36-2.275C14 8.387 14 8.06 14 7.563v-.126c0-.497 0-.824-.059-1.107-.24-1.16-1.18-2.05-2.36-2.275C11.293 4 10.958 4 10.435 4H9.5a.5.5 0 000 1h.875zM5 7a.5.5 0 100 1h5a.5.5 0 000-1H5z"
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
