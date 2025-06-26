"use client"

import Dock from "./Dock"
// import { useRouter } from "next/navigation"

const Footer = () => {
	// const router = useRouter()
	// const toGallery = async () => {
	// 	router.push("/gallery")
	// }
	// const toHome = async () => {
	// 	router.push("/")
	// }

	return (
		<footer className="fixed bottom-0 right-0 flex justify-center bg-transparent h-0 w-full">
			<Dock />
		</footer>
	)
}

export default Footer
