import * as React from 'react';
import { BaseIconProps } from './types';

interface RadioIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const RadioIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: RadioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
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
          d="M13.3977 7.49988C13.3977 10.7571 10.7571 13.3977 7.49988 13.3977C4.2426 13.3977 1.60205 10.7571 1.60205 7.49988C1.60205 4.2426 4.2426 1.60205 7.49988 1.60205C10.7571 1.60205 13.3977 4.2426 13.3977 7.49988Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.49991 1.12704C3.98029 1.12704 1.12708 3.98026 1.12708 7.49988C1.12708 11.0195 3.98029 13.8727 7.49991 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49991 1.12704ZM2.07708 7.49988C2.07708 4.50493 4.50496 2.07704 7.49991 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49991 12.9227C4.50497 12.9227 2.07708 10.4948 2.07708 7.49988ZM7.50003 9.5C8.6046 9.5 9.50003 8.60457 9.50003 7.5C9.50003 6.39543 8.6046 5.5 7.50003 5.5C6.39546 5.5 5.50003 6.39543 5.50003 7.5C5.50003 8.60457 6.39546 9.5 7.50003 9.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`RadioIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default RadioIcon;
