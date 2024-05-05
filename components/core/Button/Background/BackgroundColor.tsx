import { ButtonProp } from "../Button.interface";

export const BackgroundColor = (_prop: ButtonProp) => {
	let typeBackground = "";

	switch (_prop.typeBackground) {
		case "primary":
			typeBackground = "bg-red-300";
			break;
		case "secondary":
			typeBackground = "bg-blue-300";
			break;
		case "tertiary":
			typeBackground = "bg-green-300";
	}

	return typeBackground;
};
