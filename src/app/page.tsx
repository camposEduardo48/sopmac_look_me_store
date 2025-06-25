"use client"

import React from "react"
import Fullpage, {
	FullPageSections,
	FullpageSection,
} from "@ap.cx/react-fullpage"
import Image from "next/image"
import {
	Blockquote,
	Button,
	Divider,
	Paper,
	RingProgress,
	Table,
	Text,
} from "@mantine/core"
import { IconEye, IconInfoCircle, IconSend2 } from "@tabler/icons-react"
import { useState } from "react"
import { Rating } from "@mantine/core"

export default function Home() {
	const [value, setValue] = useState(0)
	const icon = <IconInfoCircle />
	const elements = [
		{ position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
		{ position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
		{ position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
		{ position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
		{ position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
	]
	const rows = elements.map((element) => (
		<Table.Tr key={element.name}>
			<Table.Td>{element.position}</Table.Td>
			<Table.Td>{element.name}</Table.Td>
			<Table.Td>{element.symbol}</Table.Td>
			<Table.Td>{element.mass}</Table.Td>
		</Table.Tr>
	))
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
								<div
									style={{
										display: "flex",
										justifyItems: "center",
										marginTop: "1rem",
										height: "400px",
										position: "relative",
									}}
								/>
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
						<section className="flex flex-col items-center bg-gray-100 justify-center h-screen w-full gap-4 p-10">
							lado B
							<RingProgress
								size={250}
								thickness={22}
								label={
									<Text size="xs" ta="center">
										Application data usage
									</Text>
								}
								sections={[
									{ value: 40, color: "blue" },
									{ value: 15, color: "silver" },
									{ value: 10, color: "red" },
								]}
							/>
							<Table>
								<Table.Thead>
									<Table.Tr>
										<Table.Th>Element position</Table.Th>
										<Table.Th>Element name</Table.Th>
										<Table.Th>Symbol</Table.Th>
										<Table.Th>Atomic mass</Table.Th>
									</Table.Tr>
								</Table.Thead>
								<Table.Tbody>{rows}</Table.Tbody>
							</Table>
						</section>
					</main>
				</FullpageSection>
				<FullpageSection className="bg-white h-screen">
					<main className="flex max-sm:flex-col">
						<section className="flex flex-col items-center bg-gray-100 justify-center h-screen w-full p-10">
							lado A
							<article className="p-10">
								<p className="text-2xl text-justify">
									Classifique oque você achou do modelo de layout atual.
								</p>
								<Blockquote
									color="blue"
									cite="– Forrest Gump"
									icon={icon}
									mt="xl"
								>
									Life is like an npm install – you never know what you are
									going to get.
								</Blockquote>
								<div className="flex items-center justify-center h-auto w-full p-6">
									<Rating size={30} value={value} onChange={setValue} />
								</div>
							</article>
							<Paper shadow="xs" p="xl">
								<Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Facere distinctio esse omnis sit voluptatibus nam magni
									similique earum ab, sint laborum nostrum quo, doloremque modi!
									Debitis eaque perferendis quaerat ut?
								</Text>
							</Paper>
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
