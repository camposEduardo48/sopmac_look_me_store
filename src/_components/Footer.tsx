"use client"

import {
	IconArchive,
	IconHome,
	IconPhoto,
	IconQuestionMark,
	IconSettings,
} from "@tabler/icons-react"
import Dock from "./Dock"
import { useRouter } from "next/navigation"

const Footer = () => {
	const router = useRouter()
	const toGallery = async () => {
		router.push("/gallery")
	}
	const toHome = async () => {
		router.push("/")
	}

	const items = [
		{
			icon: <IconHome size={26} />,
			label: "Home",
			onClick: () => toHome(),
		},
		{
			icon: <IconArchive size={26} />,
			label: "Archive",
			onClick: () => alert("Archive!"),
		},
		{
			icon: <IconPhoto size={26} />,
			label: "Gallery",
			onClick: () => toGallery(),
		},
		{
			icon: <IconSettings size={26} />,
			label: "Settings",
			onClick: () => alert("Settings!"),
		},
	]

	return (
		<footer className="fixed bottom-0 right-0 flex justify-end px-3 bg-transparent h-0 w-full">
			<Dock
				items={items}
				panelHeight={68}
				baseItemSize={50}
				magnification={70}
			/>
			<div className="flex items-center bottom-17 relative justify-center h-14 w-14 hover:bg-[#1c7fd6e0] bg-[#1C7ED6] rounded-full cursor-pointer">
				<IconQuestionMark color="white" size={40} />
			</div>
		</footer>
	)
}

export default Footer
