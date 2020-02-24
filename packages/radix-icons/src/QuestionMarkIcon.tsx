import * as React from 'react';
import { BaseIconProps } from './types';

interface QuestionMarkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const QuestionMarkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: QuestionMarkIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 5C5.5 3.89543 6.39543 3 7.5 3C8.60457 3 9.5 3.89543 9.5 5C9.5 5.76754 9.06603 6.16321 8.43431 6.67755L8.35871 6.7389C7.77349 7.21309 7 7.83983 7 8.99999C7 9.27614 7.22386 9.49999 7.5 9.49999C7.77614 9.49999 8 9.27614 8 8.99999C8 8.3334 8.40739 7.989 9.06569 7.45302C9.68397 6.94962 10.5 6.28404 10.5 5C10.5 3.34315 9.15685 2 7.5 2C5.84315 2 4.5 3.34315 4.5 5C4.5 5.27614 4.72386 5.5 5 5.5C5.27614 5.5 5.5 5.27614 5.5 5ZM7.5 12.233C7.91421 12.233 8.25 11.8972 8.25 11.483C8.25 11.0688 7.91421 10.733 7.5 10.733C7.08579 10.733 6.75 11.0688 6.75 11.483C6.75 11.8972 7.08579 12.233 7.5 12.233Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`QuestionMarkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default QuestionMarkIcon;
