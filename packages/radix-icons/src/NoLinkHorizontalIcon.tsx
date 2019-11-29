import * as React from 'react';
import { BaseIconProps } from './types';

interface NoLinkHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const NoLinkHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: NoLinkHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.564 4H5.5a.5.5 0 110 1H3.625c-.604 0-.836.002-1.019.037-.803.154-1.414.752-1.568 1.496-.035.17-.038.385-.038.967s.003.798.038.967c.154.744.765 1.342 1.568 1.496.183.035.415.037 1.019.037H5.5a.5.5 0 110 1H3.565c-.523 0-.858 0-1.147-.055C1.238 10.72.298 9.829.058 8.67 0 8.387 0 8.06 0 7.563a312.303 312.303 0 000-.126c0-.497 0-.824.058-1.107.24-1.16 1.18-2.05 2.36-2.275C2.708 4 3.042 4 3.564 4zm8.83 1.037C12.21 5.002 11.979 5 11.375 5H9.5a.5.5 0 110-1h1.935c.523 0 .858 0 1.146.055 1.18.225 2.12 1.116 2.36 2.275.06.283.06.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.145.055H9.5a.5.5 0 010-1h1.875c.604 0 .836-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.385.038-.967s-.003-.798-.038-.967c-.154-.744-.765-1.342-1.568-1.496z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`NoLinkHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default NoLinkHorizontalIcon;
