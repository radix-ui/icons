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
          d="M3.601 2.75a.5.5 0 01.469.325l3.1 8.32a.5.5 0 01-.936.35L5.217 9.015H1.986L.969 11.744a.5.5 0 11-.937-.35l3.1-8.319a.5.5 0 01.47-.325zm0 1.932L4.9 8.166H2.302l1.3-3.484zm7.8-1.932a.5.5 0 01.469.325l3.1 8.32a.5.5 0 11-.936.35l-1.017-2.729H9.786l-1.017 2.728a.5.5 0 11-.937-.35l3.1-8.319a.5.5 0 01.47-.325zm0 1.932L12.7 8.166h-2.598l1.3-3.484z"
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
