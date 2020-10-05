import * as React from 'react';
import { IconProps } from './types';

export const FontStyleIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M1.03793 9.98075C0.934804 9.6583 1.11605 9.37719 1.40008 9.24871C1.68411 9.12022 2.09466 9.13412 2.27073 9.45426C2.85395 10.5147 3.64602 10.7282 4.48668 10.7282C5.52723 10.7282 6.29662 10.2615 6.29662 9.45426C6.29662 8.8047 5.91193 8.46416 4.87137 8.14253L4.15875 7.92181C2.64521 7.44883 1.88845 6.69206 1.88845 5.45601C1.88845 3.79743 3.27586 2.6875 5.24345 2.6875C6.91735 2.6875 7.97412 3.33536 8.43836 4.31065C8.5709 4.58909 8.57616 4.91294 8.22797 5.19114C7.87977 5.46934 7.52354 5.34799 7.23329 5.03839C6.47217 4.22653 5.99548 4.04968 5.25606 4.04968C4.13983 4.04968 3.54703 4.63618 3.54703 5.27943C3.54703 5.86592 3.96325 6.23169 4.94705 6.5344L5.67859 6.76143C7.22996 7.23441 7.97412 7.95964 7.97412 9.17047C7.97412 10.7723 6.69392 12.0903 4.46145 12.0903C2.86614 12.0903 1.40008 11.1131 1.03793 9.98075ZM11.8491 8.77985C10.661 8.39543 10.1649 7.86114 10.1649 6.98805C10.1649 5.86736 11.1637 5.04639 12.6128 5.04639C13.8547 5.04639 14.6629 5.63345 14.9778 6.6346C15.0443 6.84599 14.9593 6.98006 14.7476 7.0491C14.5394 7.11697 14.3176 7.09974 14.238 6.89611C13.9356 6.12273 13.352 5.76311 12.5998 5.76311C11.6467 5.76311 11.0135 6.25178 11.0135 6.91638C11.0135 7.45066 11.3464 7.75038 12.2473 8.04358L12.8348 8.23254C14.062 8.62999 14.5516 9.13821 14.5516 10.0178C14.5516 11.1972 13.481 12.0442 11.9927 12.0442C10.644 12.0442 9.65646 11.2809 9.41981 10.3361C9.36538 10.1188 9.41194 10.0287 9.70042 9.96184C9.98889 9.89499 10.0714 9.89918 10.1715 10.1369C10.4555 10.8114 11.1531 11.3275 12.0319 11.3275C12.9914 11.3275 13.6834 10.7802 13.6834 10.0634C13.6834 9.53567 13.3962 9.28807 12.4366 8.97532L11.8491 8.77985Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FontStyleIcon;
