"use client"

import React from "react"
import Fullpage, {
	FullPageSections,
	FullpageSection,
} from "@ap.cx/react-fullpage"
import Image from "next/image"
import { Button, Divider } from "@mantine/core"
import { IconEye, IconSend2 } from "@tabler/icons-react"
import { useState } from "react"
import { Rating } from "@mantine/core"

export default function Home() {
	const [value, setValue] = useState(0)
	return (
		<Fullpage duration={150}>
			<FullPageSections>
				<FullpageSection className="h-screen bg-white">
					<main className="flex max-sm:flex-col">
						<section className="flex flex-col-reverse justify-around h-screen w-2xl p-6">
							<article className="flex flex-col-reverse">
								<nav className="flex justify-end gap-4 w-full">
									<Button variant="outline">
										Ver mais <IconEye />
									</Button>
									<Button variant="filled">
										Acessar <IconSend2 size={20} />
									</Button>
								</nav>
								<Divider className="my-10" color="#1C7ED6" />
							</article>
							<article className="max-w-2xl pt-20">
								<p className="text-3xl font-semibold text-[#1C7ED6]">
									Olá mundo
								</p>
								<p className="text-lg text-justify">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
									voluptatem modi ipsum similique doloremque quisquam molestias
									rerum tempora excepturi pariatur molestiae et ullam voluptatum
									veritatis commodi dicta. Debitis, architecto laborum! Lorem,
									ipsum dolor sit amet consectetur adipisicing elit. Vero
									similique debitis nulla, commodi ullam vel aliquid ratione
									officiis repellat cumque alias. Explicabo dolor minus sit
									animi. Similique magni aliquid deserunt.
								</p>
								<p className="text-lg text-justify">
									<small>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Numquam veniam vel amet eveniet minus ullam placeat
										deleniti, beatae, quam odit labore, quos distinctio
										doloremque totam ipsam vero similique rem omnis.
									</small>
								</p>
							</article>
						</section>
						<section className="flex flex-col items-center justify-center h-screen w-full">
							{/* o next automaticamente reconhece a pasta public */}
							<Image
								src="/software-tester-pana.svg"
								height={500}
								width={600}
								alt="free use"
							/>
						</section>
					</main>
				</FullpageSection>
				<FullpageSection className="h-screen">
					<main className="flex max-sm:flex-col">
						<section className="flex flex-col items-center justify-center h-screen w-full">
							lado A
							<Image
								src="/softwaretester-rafiki.svg"
								height={500}
								width={600}
								alt="free use"
							/>
						</section>
						<section className="flex flex-col items-center bg-gray-100 justify-center h-screen w-full">
							lado B
						</section>
					</main>
				</FullpageSection>
				<FullpageSection className="bg-white h-screen">
					<main className="flex max-sm:flex-col">
						<section className="flex flex-col items-center bg-gray-100 justify-center h-screen w-full">
							lado A
							<article className="p-10">
								<p className="text-2xl text-justify">
									Classifique oque você achou do modelo de layout atual.
								</p>
								<div className="flex items-center justify-center h-auto w-full p-6">
									<Rating size={30} value={value} onChange={setValue} />
								</div>
							</article>
						</section>
						<section className="flex flex-col items-center justify-center h-screen w-full">
							lado B
							<Image
								src="/product-quality-bro.svg"
								height={500}
								width={600}
								alt="free use"
							/>
						</section>
					</main>
				</FullpageSection>
			</FullPageSections>
		</Fullpage>
	)
}
