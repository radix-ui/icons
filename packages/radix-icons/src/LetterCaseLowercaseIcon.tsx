import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterCaseLowercaseIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LetterCaseLowercaseIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LetterCaseLowercaseIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.699 5.207c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.846 0 1.725-.363 2.305-1.048v.623a.4.4 0 00.8 0v-5.93a.4.4 0 10-.8 0v.624A3.009 3.009 0 003.7 5.207zm2.305 4.495V7.4c-.366-.77-1.224-1.342-2.117-1.342-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.924 0 1.758-.73 2.117-1.46zM10.8 5.207c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.846 0 1.725-.363 2.305-1.048v.623a.4.4 0 10.8 0v-5.93a.4.4 0 00-.8 0v.624A3.01 3.01 0 0010.8 5.207zm2.305 4.495V7.4c-.366-.77-1.224-1.342-2.117-1.342-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.924 0 1.758-.73 2.117-1.46z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LetterCaseLowercaseIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LetterCaseLowercaseIcon;
