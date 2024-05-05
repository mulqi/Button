import { ButtonProp } from "../Button.interface";

export const IconPosition = (_prop: ButtonProp) => {
	return _prop.iconposition === "left" ? (
		<>
			{_prop.icon}
			{_prop.title}
		</>
	) : (
		<>
			{_prop.title}
			{_prop.icon}
		</>
	);
};
