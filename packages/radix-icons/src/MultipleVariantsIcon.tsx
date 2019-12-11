import * as React from 'react';
import { BaseIconProps } from './types';

interface MultipleVariantsIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const MultipleVariantsIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: MultipleVariantsIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.671 3.146a.5.5 0 000 .707l2.475 2.475a.5.5 0 00.707 0l2.475-2.475a.5.5 0 000-.707L7.853.671a.5.5 0 00-.707 0L4.671 3.146zM7.5 5.268L5.732 3.5 7.5 1.732 9.267 3.5 7.5 5.268zM8.67 7.146a.5.5 0 000 .707l2.475 2.475a.5.5 0 00.707 0l2.475-2.475a.5.5 0 000-.707l-2.475-2.475a.5.5 0 00-.707 0L8.671 7.146zM11.5 9.268L9.732 7.5 11.5 5.732 13.268 7.5 11.5 9.268zM4.67 11.853a.5.5 0 010-.707l2.475-2.475a.5.5 0 01.707 0l2.475 2.475a.5.5 0 010 .707l-2.475 2.475a.5.5 0 01-.707 0l-2.475-2.474zm1.06-.353L7.5 13.268 9.267 11.5 7.5 9.732 5.732 11.5zM.672 7.146a.5.5 0 000 .708l2.475 2.474a.5.5 0 00.707 0l2.475-2.474a.5.5 0 000-.708L3.853 4.672a.5.5 0 00-.707 0L.671 7.146zM3.5 9.268L1.732 7.5 3.5 5.732 5.267 7.5 3.5 9.268z"
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
          d="M7.5 1.025L5.025 3.5 7.5 5.975 9.975 3.5 7.5 1.025zm4 4L9.025 7.5 11.5 9.975 13.975 7.5 11.5 5.025zM5.025 11.5L7.5 9.025 9.975 11.5 7.5 13.975 5.025 11.5zM3.5 5.025L1.025 7.5 3.5 9.975 5.975 7.5 3.5 5.025z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.671 3.146a.5.5 0 000 .707l2.475 2.475a.5.5 0 00.707 0l2.475-2.475a.5.5 0 000-.707L7.853.671a.5.5 0 00-.707 0L4.671 3.146zM7.5 5.268L5.732 3.5 7.5 1.732 9.267 3.5 7.5 5.268zM8.67 7.146a.5.5 0 000 .707l2.475 2.475a.5.5 0 00.707 0l2.475-2.475a.5.5 0 000-.707l-2.475-2.475a.5.5 0 00-.707 0L8.671 7.146zM11.5 9.268L9.732 7.5 11.5 5.732 13.268 7.5 11.5 9.268zM4.67 11.853a.5.5 0 010-.707l2.475-2.475a.5.5 0 01.707 0l2.475 2.475a.5.5 0 010 .707l-2.475 2.475a.5.5 0 01-.707 0l-2.475-2.474zm1.061-.353L7.5 13.268 9.267 11.5 7.5 9.732 5.732 11.5zM.672 7.146a.5.5 0 000 .708l2.474 2.474a.5.5 0 00.707 0l2.475-2.474a.5.5 0 000-.708L3.853 4.672a.5.5 0 00-.707 0L.671 7.146zM3.5 9.268L1.732 7.5 3.5 5.732 5.267 7.5 3.5 9.268z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MultipleVariantsIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MultipleVariantsIcon;
