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
          d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
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
