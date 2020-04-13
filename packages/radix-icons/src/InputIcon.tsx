import * as React from 'react';
import { BaseIconProps } from './types';

interface InputIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const InputIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: InputIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14 6H1L1 9H14V6ZM1 5C0.447715 5 0 5.44772 0 6V9C0 9.55228 0.447715 10 1 10H14C14.5523 10 15 9.55228 15 9V6C15 5.44772 14.5523 5 14 5H1Z"
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
          d="M0 6C0 5.44772 0.447715 5 1 5H14C14.5523 5 15 5.44772 15 6V9C15 9.55228 14.5523 10 14 10H1C0.447715 10 0 9.55228 0 9V6Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M14 6H1L1 9H14V6ZM1 5C0.447715 5 0 5.44772 0 6V9C0 9.55228 0.447715 10 1 10H14C14.5523 10 15 9.55228 15 9V6C15 5.44772 14.5523 5 14 5H1Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`InputIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InputIcon;
