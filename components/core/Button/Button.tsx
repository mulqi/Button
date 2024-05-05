"use client";

import { BackgroundColor } from "./Background";
import { ButtonProp } from "./Button.interface";
import { IconPosition } from "./IconPosotion";
import { Size } from "./Size";
import { TypeTooltip } from "./Tooltip";

export const Button = (_prop: ButtonProp) => {
	const BackgroundColorClass = BackgroundColor(_prop);
	const SizeClass = Size(_prop);
	const PostionClass = IconPosition(_prop);
	const PositionTooltip = TypeTooltip(_prop);

	return (
		<div
			className={`ease-in-out delay-150 hover:drop-shadow-3xl duration-500 text-white rounded-[50px] tooltip ${PositionTooltip}`}
			data-tip={_prop.tooltipTitle}
		>
			<div></div>
			<button
				type={_prop.type}
				className={`text-black ${SizeClass} h-[47px] hover:opacity-75 rounded-[50px] font-bold ${BackgroundColorClass} `}
				onClick={_prop.onClick}
			>
				{PostionClass}
			</button>
		</div>
	);
};
