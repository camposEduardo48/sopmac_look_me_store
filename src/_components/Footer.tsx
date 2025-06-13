"use client"

import { IconQuestionMark } from "@tabler/icons-react"

const Footer = () => {
	return (
		<footer className="fixed bottom-0 right-0 flex justify-end p-4 bg-transparent h-auto w-auto">
			<div className="flex items-center justify-center h-14 w-14 bg-[#1C7ED6] rounded-full">
				<IconQuestionMark color="white" size={40} />
			</div>
		</footer>
	)
}

export default Footer
