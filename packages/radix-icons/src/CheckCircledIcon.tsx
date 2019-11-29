import * as React from 'react';
import { BaseIconProps } from './types';

interface CheckCircledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CheckCircledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CheckCircledIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zm7.839-1.723a.5.5 0 00-.832-.554L6.759 8.71l-.902-.922a.5.5 0 00-.714.699L6.476 9.85a.5.5 0 00.773-.073l2.667-4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CheckCircledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CheckCircledIcon;
