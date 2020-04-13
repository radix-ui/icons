import * as React from 'react';
import { BaseIconProps } from './types';

interface ValueNoneIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ValueNoneIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ValueNoneIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.49988 1.12704C8.80781 1.12704 10.0237 1.52106 11.0354 2.19687L10.3479 2.88428C9.52024 2.37245 8.54455 2.07704 7.49988 2.07704C4.50494 2.07704 2.07705 4.50493 2.07705 7.49988C2.07705 8.54455 2.37246 9.52023 2.88429 10.3479L2.19688 11.0354C1.52107 10.0237 1.12705 8.8078 1.12705 7.49988C1.12705 3.98026 3.98027 1.12704 7.49988 1.12704ZM12.1157 4.65211L12.8031 3.96468C13.4788 4.97628 13.8727 6.19207 13.8727 7.49988C13.8727 11.0195 11.0195 13.8727 7.49988 13.8727C6.19208 13.8727 4.97629 13.4788 3.96469 12.8031L4.65211 12.1157C5.47976 12.6274 6.45533 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.45533 12.6274 5.47976 12.1157 4.65211ZM13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ValueNoneIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ValueNoneIcon;
