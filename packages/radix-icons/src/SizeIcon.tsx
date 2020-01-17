import * as React from 'react';
import { BaseIconProps } from './types';

interface SizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.5 3.05002C11.7485 3.05002 11.95 3.25149 11.95 3.50002L11.95 7.50002C11.95 7.74855 11.7485 7.95002 11.5 7.95002C11.2515 7.95002 11.05 7.74855 11.05 7.50002V4.58642L4.58638 11.05L7.49999 11.05C7.74852 11.05 7.94999 11.2515 7.94999 11.5C7.94999 11.7485 7.74852 11.95 7.49999 11.95H3.49999C3.38064 11.95 3.26618 11.9026 3.18179 11.8182C3.0974 11.7338 3.04999 11.6194 3.04999 11.5L3.04999 7.50002C3.04999 7.25149 3.25146 7.05002 3.49999 7.05002C3.74852 7.05002 3.94999 7.25149 3.94999 7.50002L3.94999 10.4136L10.4136 3.95002L7.49999 3.95002C7.25146 3.95002 7.04999 3.74855 7.04999 3.50002C7.04999 3.25149 7.25146 3.05002 7.49999 3.05002L11.5 3.05002Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SizeIcon;
