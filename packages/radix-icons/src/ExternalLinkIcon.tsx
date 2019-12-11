import * as React from 'react';
import { BaseIconProps } from './types';

interface ExternalLinkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ExternalLinkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ExternalLinkIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.854 2.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146zM3 4a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V9.071a.5.5 0 00-1 0V12H3V5h2.929a.5.5 0 000-1H3z"
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
          d="M13.21 1.795a.997.997 0 01.29.702V5.5a1 1 0 11-2 0v-.586l-1 1V12a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h6.086l1-1H9.5a1 1 0 010-2h3c.275 0 .524.111.705.29l.004.005z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.854 2.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146zM3 4a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V9.071a.5.5 0 00-1 0V12H3V5h2.929a.5.5 0 000-1H3z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ExternalLinkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ExternalLinkIcon;