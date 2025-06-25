"use client"

import CircularGallery from "@/_components/CircularGallery"

const GalleryPage = () => {
	return (
		<main className="absolute top-16 h-auto w-full border-8 border-amber-500">
			<CircularGallery
				baseWidth={1500}
				itemSize={1500}
				autoplay={false}
				bend={3}
				autoplayDelay={10000}
				pauseOnHover={true}
				loop={true}
				round={true}
			/>
		</main>
	)
}

export default GalleryPage
