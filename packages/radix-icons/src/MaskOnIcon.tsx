import * as React from 'react';
import { BaseIconProps } from './types';

interface MaskOnIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const MaskOnIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: MaskOnIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M0.217987 2.09202C0 2.51984 0 3.0799 0 4.2V10.8C0 11.9201 0 12.4802 0.217987 12.908C0.409734 13.2843 0.715695 13.5903 1.09202 13.782C1.51984 14 2.0799 14 3.2 14H11.8C12.9201 14 13.4802 14 13.908 13.782C14.2843 13.5903 14.5903 13.2843 14.782 12.908C15 12.4802 15 11.9201 15 10.8V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H3.2C2.0799 1 1.51984 1 1.09202 1.21799C0.715695 1.40973 0.409734 1.71569 0.217987 2.09202ZM7.5 10.625C9.22589 10.625 10.625 9.22589 10.625 7.5C10.625 5.77411 9.22589 4.375 7.5 4.375C5.77411 4.375 4.375 5.77411 4.375 7.5C4.375 9.22589 5.77411 10.625 7.5 10.625Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MaskOnIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MaskOnIcon;
