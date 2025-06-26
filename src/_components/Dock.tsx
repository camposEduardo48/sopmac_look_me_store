"use client"

import {
	IconHelp,
	IconList,
	IconSettings,
	IconShoppingBag,
} from "@tabler/icons-react"
import { Modal } from "@mantine/core"
import { useState } from "react"
import Products from "./Products"
import Sells from "./Sells"
import Settings from "./Settings"
import Help from "./Help"

// interface PropsDock {
// 	selection: string
// }

const Dock = () => {
	const [activeModal, setActiveModal] = useState<string | null>(null)
	const items = [
		{ selection: "products", icon: <IconShoppingBag /> },
		{ selection: "sells", icon: <IconList /> },
		{ selection: "settings", icon: <IconSettings /> },
		{ selection: "help", icon: <IconHelp /> },
	]
	const open = (selection: string) => setActiveModal(selection)
	const close = () => setActiveModal(null)

	return (
		<section className="relative flex gap-4 h-auto w-auto bottom-16 text-white">
			{items.map((dockItem) => (
				<main key={dockItem.selection}>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="cursor-pointer"
						onClick={() => open(dockItem.selection)}
					>
						<div className="flex justify-center relative items-center rounded-full transition-all hover:scale-110 active:scale-110 focus:scale-110 duration-300 ease-in-out hover:bg-[rgba(28,90,214,0.93)] bg-[#1C7ED6] cursor-pointer shadow-2xl h-[50px] w-[50px]">
							{dockItem.icon}
						</div>
					</button>
					<Modal
						className="bg-red-600"
						withOverlay={false}
						opened={activeModal !== null}
						size="100%"
						fullScreen={false}
						onClose={close}
						closeOnClickOutside={false}
						title={activeModal}
						centered
					>
						{activeModal === "products" && <Products />}
						{activeModal === "sells" && <Sells />}
						{activeModal === "settings" && <Settings />}
						{activeModal === "help" && <Help />}
					</Modal>
				</main>
			))}
		</section>
	)
}

export default Dock
