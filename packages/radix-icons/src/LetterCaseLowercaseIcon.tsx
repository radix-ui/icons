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
          d="M3.699 5.207c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99V11.53h.45-.45a.45.45 0 00.9 0h-.45.45V5.72a.45.45 0 00-.9 0V6.223a3.01 3.01 0 00-2.255-1.016zm2.255 2.098v-.004c-.39-.72-1.213-1.243-2.067-1.243-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.684-.666 2.067-1.363V7.305zm4.845-2.098c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99V11.53h.45-.45a.45.45 0 10.9 0h-.45.45V5.72a.45.45 0 00-.9 0V6.223A3.01 3.01 0 0010.8 5.207zm2.255 2.098v-.003c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364V7.305z"
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
