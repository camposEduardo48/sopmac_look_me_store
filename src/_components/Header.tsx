"use client"

import { IconBusinessplan, IconUserCircle } from "@tabler/icons-react"

const Header = () => {
	return (
		<header className="flex items-center fixed shadow-xl z-50 top-0 p-4 bg-white justify-between h-auto w-full">
			<section>
				<IconBusinessplan color="gray" size={30} />
			</section>
			<nav>
				<IconUserCircle color="gray" size={30} />
			</nav>
		</header>
	)
}

export default Header
