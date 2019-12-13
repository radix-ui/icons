import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterCaseUppercaseIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LetterCaseUppercaseIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LetterCaseUppercaseIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.601 2.611a.5.5 0 01.47.328l3.1 8.459a.5.5 0 11-.938.344l-.99-2.701H1.96l-.99 2.7a.5.5 0 11-.94-.343l3.102-8.46a.5.5 0 01.47-.327zm0 1.953L4.913 8.14H2.29L3.6 4.564zm7.8-1.953a.5.5 0 01.47.328l3.1 8.459a.5.5 0 01-.938.344l-.99-2.701H9.76l-.99 2.7a.5.5 0 11-.94-.343l3.102-8.46a.5.5 0 01.47-.327zm0 1.953l1.312 3.577H10.09L11.4 4.564z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LetterCaseUppercaseIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LetterCaseUppercaseIcon;
