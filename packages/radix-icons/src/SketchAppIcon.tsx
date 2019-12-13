import * as React from 'react';
import { BaseIconProps } from './types';

interface SketchAppIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SketchAppIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SketchAppIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.447 1.129a.375.375 0 01.106 0l3.5.5c.09.013.172.058.232.127l3 3.5.002.003a.374.374 0 01-.009.493L7.78 13.049a.375.375 0 01-.56 0L.722 5.752a.374.374 0 01-.009-.493l.002-.003 3-3.5a.375.375 0 01.232-.127l3.5-.5zM1.836 5.875l4.502 5.056-2.167-5.056H1.836zm7.83-.825H5.334L7.5 2.305 9.667 5.05zm1.163.825l-2.167 5.056 4.502-5.056h-2.335zm2.356-.75l-1.93-2.252-.323 2.252h2.253zm-2.61-2.807l-2.377-.34 2.054 2.603.324-2.263zm-3.773-.34l-2.378.34.324 2.263 2.054-2.603zm-3.056.895l.322 2.252H1.815l1.93-2.252zM5.182 5.95L7.5 11.358 9.818 5.95H5.182z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SketchAppIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SketchAppIcon;
