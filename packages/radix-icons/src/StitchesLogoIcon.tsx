import * as React from 'react';
import { IconProps } from './types';

export const StitchesLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.85001 7.49998C1.85001 7.21321 1.87137 6.93143 1.91259 6.65615L9.56377 2.23875C9.86314 2.35627 10.15 2.49861 10.4219 2.66322L3.77068 6.50332C3.73672 6.52183 3.70485 6.5449 3.67605 6.57238C3.59113 6.65308 3.54248 6.76286 3.53685 6.87658C3.53362 6.9418 3.54454 7.00831 3.57089 7.07137C3.5893 7.1157 3.61493 7.15742 3.64747 7.19458C3.67309 7.22396 3.70203 7.24941 3.7334 7.27069L7.32536 9.83813L3.87235 11.8317C2.63607 10.7953 1.85001 9.23944 1.85001 7.49998ZM8.36846 10.2751C8.37685 10.2706 8.38512 10.2659 8.39325 10.2608L9.84094 9.42499C9.84709 9.42163 9.85317 9.41812 9.85918 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4555 8.44995C11.6035 8.25031 11.5616 7.96848 11.362 7.82046L7.82782 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1208 8.16411 13.0647 8.48353L5.56878 12.8113C5.26141 12.6995 4.96649 12.5618 4.68665 12.4008L8.36846 10.2751ZM8.18152 9.34383L4.81662 6.93868L5.50922 6.53881L8.80607 8.98324L8.18152 9.34383ZM6.35878 6.04832L6.97825 5.69067L10.2752 8.13506L9.65563 8.49275L6.35878 6.04832ZM8.33183 1.91078L2.24266 5.42636C3.06944 3.33188 5.11167 1.84998 7.50001 1.84998C7.78261 1.84998 8.06036 1.87072 8.33183 1.91078ZM6.84687 13.1126C7.06117 13.1373 7.27911 13.15 7.50001 13.15C9.82463 13.15 11.8214 11.7461 12.6886 9.7399L6.84687 13.1126ZM7.50001 0.849976C3.82731 0.849976 0.850006 3.82728 0.850006 7.49998C0.850006 11.1727 3.82731 14.15 7.50001 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.50001 0.849976Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default StitchesLogoIcon;
