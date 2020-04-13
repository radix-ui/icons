import * as React from 'react';
import { BaseIconProps } from './types';

interface PinIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const PinIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: PinIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.62132 1.13604C9.81659 0.940778 10.1332 0.940778 10.3284 1.13604L13.864 4.67157C14.0592 4.86684 14.0592 5.18342 13.864 5.37868C13.6687 5.57394 13.3521 5.57394 13.1569 5.37868L12.5038 4.72567L8.8673 9.5744L9.97488 10.682C10.1701 10.8772 10.1701 11.1938 9.97488 11.3891C9.77961 11.5844 9.46303 11.5844 9.26777 11.3891L6.88128 9.0026L3.34575 12.5381C3.10167 12.7822 2.70594 12.7822 2.46187 12.5381C2.21779 12.2941 2.21779 11.8983 2.46187 11.6543L5.9974 8.11872L3.61092 5.73223C3.41565 5.53697 3.41565 5.22039 3.61092 5.02513C3.80618 4.82987 4.12276 4.82987 4.31802 5.02513L5.4256 6.13271L10.2743 2.49616L9.62132 1.84315C9.42606 1.64788 9.42606 1.3313 9.62132 1.13604Z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(`PinIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PinIcon;
