import { Button, Iconoir } from "@/components";

export default function Home() {
	return (
		<main className="w-full h-[645px] flex justify-center items-center bg-gray-600">
			<Button
				type="button"
				title="Download"
				size="large"
				typeBackground="secondary"
				tooltip="left"
				tooltipTitle="ini adalah button download"
				iconposition="right"
				icon={<Iconoir name="CloudDownload" className="inline mx-1" />}
			/>
		</main>
	);
}
