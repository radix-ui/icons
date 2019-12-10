import * as React from 'react';
import { BaseIconProps } from './types';

interface NoLinkAngledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const NoLinkAngledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: NoLinkAngledIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.242 7.808l.043-.043L3.61 6.44a.5.5 0 01.707.708L2.992 8.472c-.427.427-.59.593-.694.747-.46.677-.469 1.532-.051 2.167.094.144.245.299.657.71.411.412.566.563.71.657.635.418 1.49.409 2.167-.05.154-.106.32-.268.746-.695l1.326-1.326a.5.5 0 01.707.707l-1.325 1.326-.043.043c-.37.37-.606.606-.85.771-.993.675-2.287.71-3.277.06-.242-.158-.473-.39-.824-.74a61.362 61.362 0 00-.09-.09c-.35-.351-.582-.582-.74-.824-.65-.99-.616-2.284.06-3.278.165-.243.401-.48.77-.849zm6.977-5.51c-.155.105-.32.267-.747.694L7.146 4.318a.5.5 0 01-.707-.707l1.326-1.326.043-.043c.37-.37.606-.606.849-.771.994-.675 2.288-.71 3.278-.06.241.159.472.39.823.741a61.764 61.764 0 01.09.09c.351.35.582.582.74.823.651.99.616 2.284-.06 3.278-.164.243-.4.48-.77.85l-.043.042-1.326 1.326a.5.5 0 11-.707-.707l1.326-1.326c.427-.427.589-.593.694-.747.46-.676.468-1.531.05-2.167-.094-.144-.244-.298-.656-.71-.412-.412-.566-.562-.71-.657-.636-.417-1.49-.408-2.167.051z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`NoLinkAngledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default NoLinkAngledIcon;
