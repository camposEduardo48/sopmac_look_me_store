"use client"

const Products = () => {
	const list = [
		{ productName: "Camiseta" },
		{ productName: "Calça" },
		{ productName: "b" },
		{ productName: "Calçsa" },
		{ productName: "Calça" },
		{ productName: "3" },
		{ productName: "Calça" },
		{ productName: "er" },
		{ productName: "Calça" },
		{ productName: "Calça" },
		{ productName: "f" },
		{ productName: "Calça" },
		{ productName: "Calça" },
		{ productName: "Calça" },
		{ productName: "Calça" },
		{ productName: "8" },
		{ productName: "Calça" },
	]
	return (
		<>
			<section className="min-h-100 h-auto w-full p-2">
				<p>Catalogo</p>
				<small>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
					aspernatur eum atque id iste accusantium eligendi, ipsa aperiam
					corrupti voluptatem soluta nesciunt tempore. Earum id, ea consequatur
					quam nobis alias?
				</small>
				<div>
					<ul className="flex flex-col gap-2 p-2">
						{list.map((itemList, index: number) => (
							<li
								className="rounded-lg p-2 bg-blue-500 text-amber-50 font-semibold"
								key={index}
							>
								{" "}
								- {itemList.productName}
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Products
