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
          d="M3.601 2.75a.5.5 0 01.469.325l3.1 8.32a.5.5 0 01-.936.35L5.226 9.04h-3.25L.97 11.744a.5.5 0 11-.937-.35l3.1-8.319a.5.5 0 01.47-.325zm0 1.932l1.29 3.459H2.31l1.29-3.46zm7.8-1.932a.5.5 0 01.469.325l3.1 8.32a.5.5 0 11-.936.35L13.026 9.04h-3.25L8.77 11.744a.5.5 0 11-.937-.35l3.1-8.319a.5.5 0 01.47-.325zm0 1.932l1.29 3.459h-2.58l1.29-3.46z"
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
