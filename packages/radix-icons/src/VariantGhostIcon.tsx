import * as React from 'react';
import { BaseIconProps } from './types';

interface VariantGhostIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const VariantGhostIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: VariantGhostIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.147 1.49a.5.5 0 11.707.707.5.5 0 01-.707-.708zM8.56 2.903a.5.5 0 11.707.707.5.5 0 01-.707-.707zm1.414 1.414a.5.5 0 11.707.707.5.5 0 01-.707-.707zm1.414 1.414a.5.5 0 11.707.707.5.5 0 01-.707-.707zm1.414 1.414a.5.5 0 11.707.707.5.5 0 01-.707-.707zM6.44 2.904a.5.5 0 11-.707.707.5.5 0 01.707-.707zm5.657 5.657a.5.5 0 11-.707.707.5.5 0 01.707-.707zm-7.07-4.243a.5.5 0 11-.708.707.5.5 0 01.707-.707zm5.656 5.657a.5.5 0 11-.707.707.5.5 0 01.707-.707zM3.611 5.732a.5.5 0 11-.707.707.5.5 0 01.707-.707zm5.657 5.657a.5.5 0 11-.707.707.5.5 0 01.707-.707zM2.197 7.146a.5.5 0 11-.707.707.5.5 0 01.707-.707zm5.657 5.657a.5.5 0 11-.707.707.5.5 0 01.707-.707zm-4.95-4.242a.5.5 0 11.707.707.5.5 0 01-.707-.707zm1.414 1.414a.5.5 0 11.707.707.5.5 0 01-.707-.707zm1.414 1.414a.5.5 0 11.707.707.5.5 0 01-.707-.707z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`VariantGhostIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VariantGhostIcon;
