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
          d="M2.99998 1C2.4477 1 1.99998 1.44772 1.99998 2V13C1.99998 13.5523 2.4477 14 2.99998 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H2.99998V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H2.99998ZM12.6035 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.49998C6.22384 7 5.99998 7.22386 5.99998 7.5C5.99998 7.77614 6.22384 8 6.49998 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6035 10.1036L14.8535 7.85355C15.0488 7.65829 15.0488 7.34171 14.8535 7.14645L12.6035 4.89645Z"
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
