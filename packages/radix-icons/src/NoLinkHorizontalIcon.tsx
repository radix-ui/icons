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
          d="M4.564 4H5.5a.5.5 0 010 1h-.875c-.604 0-.836.002-1.019.037-.803.154-1.414.752-1.568 1.496-.035.17-.038.384-.038.967 0 .582.003.798.038.967.154.744.765 1.342 1.568 1.496.183.035.415.037 1.019.037H5.5a.5.5 0 110 1h-.935c-.523 0-.858 0-1.147-.055-1.18-.226-2.12-1.116-2.36-2.275C1 8.387 1 8.06 1 7.563a325.8 325.8 0 000-.126c0-.497 0-.824.058-1.107.24-1.16 1.18-2.05 2.36-2.275C3.708 4 4.042 4 4.564 4zm6.83 1.037C11.21 5.002 10.979 5 10.374 5H9.5a.5.5 0 010-1h.935c.523 0 .858 0 1.146.055 1.18.225 2.12 1.115 2.36 2.275.06.283.059.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.145.055H9.5a.5.5 0 010-1h.875c.604 0 .836-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.385.038-.967 0-.583-.003-.798-.038-.967-.154-.744-.765-1.343-1.568-1.496z"
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
