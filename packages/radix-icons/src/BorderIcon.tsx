import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3.25C2 2.55964 2.55964 2 3.25 2H11.75C12.4404 2 13 2.55964 13 3.25V11.75C13 12.4404 12.4404 13 11.75 13H3.25C2.55964 13 2 12.4404 2 11.75V3.25ZM3.5 3.5V11.5H11.5V3.5H3.5Z"
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
          d="M2.75 3.25C2.75 2.97386 2.97386 2.75 3.25 2.75H11.75C12.0261 2.75 12.25 2.97386 12.25 3.25V11.75C12.25 12.0261 12.0261 12.25 11.75 12.25H3.25C2.97386 12.25 2.75 12.0261 2.75 11.75V3.25Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M2 3.25C2 2.55964 2.55964 2 3.25 2H11.75C12.4404 2 13 2.55964 13 3.25V11.75C13 12.4404 12.4404 13 11.75 13H3.25C2.55964 13 2 12.4404 2 11.75V3.25ZM3.5 3.5V11.5H11.5V3.5H3.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderIcon;
