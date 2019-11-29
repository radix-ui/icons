import * as React from 'react';
import { BaseIconProps } from './types';

interface TextAlignCenterIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TextAlignCenterIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TextAlignCenterIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 4.5a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm2 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-1 3a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextAlignCenterIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextAlignCenterIcon;
