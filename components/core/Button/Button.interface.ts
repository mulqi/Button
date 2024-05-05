import { ReactElement } from "react";

export interface ButtonProp {
	title: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	icon: ReactElement;
	tooltip: "top" | "right" | "bottom" | "left";
	tooltipTitle: string;
	iconposition: "left" | "right";
	size: "small" | "medium" | "large";
	typeBackground: "primary" | "secondary" | "tertiary";
}
