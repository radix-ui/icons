import * as React from "react";
import type { IconProps } from "./types.js";

export const BorderWidthIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function BorderWidthIcon({ color = "currentColor", ...props }, forwardedRef) {
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
				<path
					d="M14 12.75H1V10.25H14V12.75ZM14 8H1V6H14V8ZM14 4H1V3H14V4Z"
					fill={color}
				/>
			</svg>
		);
	},
);

export default BorderWidthIcon;
