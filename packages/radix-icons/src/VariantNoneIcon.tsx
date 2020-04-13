import * as React from 'react';
import { BaseIconProps } from './types';

interface VariantNoneIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const VariantNoneIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: VariantNoneIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.6968 0.989586C12.892 1.18485 12.892 1.50143 12.6968 1.69669L1.69675 12.6967C1.50149 12.892 1.18491 12.892 0.989647 12.6967C0.794385 12.5014 0.794385 12.1848 0.989647 11.9896L11.9896 0.989586C12.1849 0.794324 12.5015 0.794324 12.6968 0.989586Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`VariantNoneIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VariantNoneIcon;
