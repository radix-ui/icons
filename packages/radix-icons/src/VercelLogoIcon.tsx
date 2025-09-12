import * as React from "react";
import type { IconProps } from "./types.js";

export const VercelLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function VercelLogoIcon({ color = "currentColor", ...props }, forwardedRef) {
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
					d="M14.3998 13H0.599976L7.50037 1L14.3998 13ZM2.32849 12H12.6713L7.49939 3.00488L2.32849 12Z"
					fill={color}
				/>
			</svg>
		);
	},
);

export default VercelLogoIcon;
