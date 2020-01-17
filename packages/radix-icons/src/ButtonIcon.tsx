import * as React from 'react';
import { BaseIconProps } from './types';

interface ButtonIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ButtonIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ButtonIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 5H12C12.5523 5 13 5.44772 13 6V9C13 9.55228 12.5523 10 12 10H3C2.44772 10 2 9.55228 2 9V6C2 5.44772 2.44772 5 3 5ZM1 6C1 4.89543 1.89543 4 3 4H12C13.1046 4 14 4.89543 14 6V9C14 10.1046 13.1046 11 12 11H3C1.89543 11 1 10.1046 1 9V6ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5Z"
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
          d="M3 4C1.89543 4 1 4.89543 1 6V9C1 10.1046 1.89543 11 3 11H12C13.1046 11 14 10.1046 14 9V6C14 4.89543 13.1046 4 12 4H3Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3 5H12C12.5523 5 13 5.44772 13 6V9C13 9.55228 12.5523 10 12 10H3C2.44772 10 2 9.55228 2 9V6C2 5.44772 2.44772 5 3 5ZM1 6C1 4.89543 1.89543 4 3 4H12C13.1046 4 14 4.89543 14 6V9C14 10.1046 13.1046 11 12 11H3C1.89543 11 1 10.1046 1 9V6ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ButtonIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ButtonIcon;
