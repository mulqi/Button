import { ButtonProp } from "../Button.interface";

export const TypeTooltip = (_prop: ButtonProp) => {
	let positontip = "";
	switch (_prop.tooltip) {
		case "top":
			positontip = "tooltip-top";
			break;
		case "right":
			positontip = "tooltip-right";
			break;
		case "bottom":
			positontip = "tooltip-bottom";
			break;
		case "left":
			positontip = "tooltip-left";
	}

	return positontip;
};
