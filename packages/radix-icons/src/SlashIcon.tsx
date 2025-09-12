import * as React from "react";
import type { IconProps } from "./types.js";

export const SlashIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function SlashIcon({ color = "currentColor", ...props }, forwardedRef) {
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
					d="M5.46033 14H4.10779L9.46521 1H10.8177L5.46033 14Z"
					fill={color}
				/>
			</svg>
		);
	},
);

export default SlashIcon;
