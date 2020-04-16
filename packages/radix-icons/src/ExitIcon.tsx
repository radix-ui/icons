import * as React from 'react';
import { BaseIconProps } from './types';

interface ExitIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ExitIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ExitIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 1C1.44771 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H2V2L9.5 2C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H2ZM11.6036 4.89645C11.4083 4.70118 11.0917 4.70118 10.8964 4.89645C10.7012 5.09171 10.7012 5.40829 10.8964 5.60355L12.2929 7H5.5C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H12.2929L10.8964 9.39645C10.7012 9.59171 10.7012 9.90829 10.8964 10.1036C11.0917 10.2988 11.4083 10.2988 11.6036 10.1036L13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645L11.6036 4.89645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ExitIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ExitIcon;
