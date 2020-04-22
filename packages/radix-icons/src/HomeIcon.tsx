import * as React from 'react';
import { BaseIconProps } from './types';

interface HomeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const HomeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: HomeIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.07924 0.222253C7.31273 -0.007434 7.68727 -0.007434 7.92076 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6777 7.71077C14.4454 7.947 14.0655 7.95012 13.8292 7.71774L13 6.90201V12.5C13 12.7762 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7762 2 12.5V6.90201L1.17076 7.71774C0.934533 7.95012 0.554647 7.947 0.322265 7.71077C0.0898831 7.47453 0.0930035 7.09465 0.329235 6.86227L7.07924 0.222253ZM7.5 1.49163L12 5.91831V12H10V8.49999C10 8.22384 9.77614 7.99999 9.5 7.99999H6.5C6.22386 7.99999 6 8.22384 6 8.49999V12H3V5.91831L7.5 1.49163ZM7 12H9V8.99999H7V12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HomeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HomeIcon;
