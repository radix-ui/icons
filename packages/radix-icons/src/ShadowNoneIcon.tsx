import * as React from 'react';
import { BaseIconProps } from './types';

interface ShadowNoneIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ShadowNoneIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ShadowNoneIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.4806 0.773491C12.6759 0.968753 12.6759 1.28534 12.4806 1.4806L1.48061 12.4806C1.28534 12.6759 0.968761 12.6759 0.773499 12.4806C0.578237 12.2853 0.578237 11.9688 0.773499 11.7735L11.7735 0.773491C11.9688 0.578229 12.2853 0.578229 12.4806 0.773491Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ShadowNoneIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ShadowNoneIcon;
