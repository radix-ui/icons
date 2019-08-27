import * as React from 'react';

export interface BaseIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}
