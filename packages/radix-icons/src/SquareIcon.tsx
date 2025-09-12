import * as React from "react";
import type { IconProps } from "./types.js";

export const SquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function SquareIcon({ color = "currentColor", ...props }, forwardedRef) {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path d="M14 14H1V1H14V14ZM2 13H13V2H2V13Z" fill={color} />
			</svg>
		);
	},
);

export default SquareIcon;
