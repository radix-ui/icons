import * as React from 'react';
import { BaseIconProps } from './types';

interface ReloadIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ReloadIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ReloadIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.09999 7.49997C2.09999 4.78957 4.21231 2.09998 7.49999 2.09998C9.80254 2.09998 10.8946 3.24667 12.3176 4.74098L12.4645 4.89513L12.5646 5H10.5C10.2239 5 10 5.22385 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22385 13.7761 2 13.5 2C13.2239 2 13 2.22385 13 2.5V4.00721C12.9996 4.00678 12.9992 4.00635 12.9988 4.00592C11.6014 2.5355 10.2372 1.09998 7.49999 1.09998C3.58967 1.09998 1.09999 4.31037 1.09999 7.49997C1.09999 10.6896 3.58967 13.9 7.49999 13.9C9.37047 13.9 10.9282 13.1598 12.0374 12.0312C12.6312 11.4271 13.0948 10.7133 13.411 9.94517C13.5161 9.68981 13.3943 9.3976 13.1389 9.2925C12.8835 9.18741 12.5913 9.30923 12.4862 9.56459C12.2178 10.2169 11.8247 10.821 11.3242 11.3303C10.3955 12.2752 9.09169 12.9 7.49999 12.9C4.21231 12.9 2.09999 10.2104 2.09999 7.49997Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ReloadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ReloadIcon;
