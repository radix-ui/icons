import * as React from 'react';
import { BaseIconProps } from './types';

interface MultipleVariantsIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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
          d="M4.671 3.146a.5.5 0 000 .708l2.475 2.474a.5.5 0 00.707 0l2.475-2.474a.5.5 0 000-.708L7.853.672a.5.5 0 00-.707 0L4.671 3.146zM7.5 5.268L5.732 3.5 7.5 1.732 9.268 3.5 7.5 5.268zM8.67 7.146a.5.5 0 000 .708l2.475 2.474a.5.5 0 00.707 0l2.475-2.474a.5.5 0 000-.708l-2.475-2.474a.5.5 0 00-.707 0L8.671 7.146zM11.5 9.268L9.732 7.5 11.5 5.732 13.268 7.5 11.5 9.268zM4.67 11.854a.5.5 0 010-.707l2.475-2.475a.5.5 0 01.707 0l2.475 2.474a.5.5 0 010 .708l-2.475 2.474a.5.5 0 01-.707 0l-2.475-2.474zm1.061-.354L7.5 13.268 9.268 11.5 7.5 9.732 5.732 11.5zM.672 7.147a.5.5 0 000 .707l2.474 2.475a.5.5 0 00.707 0l2.475-2.475a.5.5 0 000-.707L3.853 4.672a.5.5 0 00-.707 0L.671 7.147zM3.5 9.267L1.732 7.5 3.5 5.732 5.268 7.5 3.5 9.268z"
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
