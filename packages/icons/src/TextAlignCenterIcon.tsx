import * as React from 'react';
import { BaseIconProps } from './types';

interface TextAlignCenterIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextAlignCenterIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextAlignCenterIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M8 16.5h9M4 12.5h17M8 8.5h9" stroke={color} />
      </svg>
    );
  }

  console.error(
    `TextAlignCenterIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextAlignCenterIcon;
