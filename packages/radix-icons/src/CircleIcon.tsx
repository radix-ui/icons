import * as React from 'react';
import { BaseIconProps } from './types';

interface CircleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CircleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CircleIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.12704 7.49988C1.12704 3.98027 3.98026 1.12705 7.49988 1.12705C11.0195 1.12705 13.8727 3.98027 13.8727 7.49988C13.8727 11.0195 11.0195 13.8727 7.49988 13.8727C3.98026 13.8727 1.12704 11.0195 1.12704 7.49988ZM7.49988 2.07705C4.50493 2.07705 2.07704 4.50494 2.07704 7.49988C2.07704 10.4948 4.50493 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 4.50494 10.4948 2.07705 7.49988 2.07705Z"
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
          d="M7.49988 13.3977C10.7571 13.3977 13.3977 10.7571 13.3977 7.49988C13.3977 4.2426 10.7571 1.60205 7.49988 1.60205C4.2426 1.60205 1.60205 4.2426 1.60205 7.49988C1.60205 10.7571 4.2426 13.3977 7.49988 13.3977Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M1.12708 7.49988C1.12708 3.98027 3.98029 1.12705 7.49991 1.12705C11.0195 1.12705 13.8727 3.98027 13.8727 7.49988C13.8727 11.0195 11.0195 13.8727 7.49991 13.8727C3.98029 13.8727 1.12708 11.0195 1.12708 7.49988ZM7.49991 2.07705C4.50496 2.07705 2.07708 4.50494 2.07708 7.49988C2.07708 10.4948 4.50497 12.9227 7.49991 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 4.50494 10.4948 2.07705 7.49991 2.07705Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CircleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CircleIcon;
