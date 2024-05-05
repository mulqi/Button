import { ButtonProp } from "../Button.interface";

export const Size = (_prop: ButtonProp) => {
	let typeSize = "";

	switch (_prop.size) {
		case "small":
			typeSize = "w-[150px]";
			break;
		case "medium":
			typeSize = "w-[200px]";
			break;
		case "large":
			typeSize = "w-[230px]";
	}

	return typeSize;
};
