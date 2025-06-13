declare module "@ap.cx/react-fullpage" {
	import type { ReactNode, CSSProperties } from "react"

	export interface FullpageProps {
		children: ReactNode
		duration?: number
		touchSensitivity?: number
		hideScrollBar?: boolean
	}

	export interface SectionProps {
		children: ReactNode
		style?: CSSProperties
		className?: string
	}

	export const Fullpage: (props: FullpageProps) => JSX.Element
	export const FullPageSections: (props: { children: ReactNode }) => JSX.Element
	export const FullpageSection: (props: SectionProps) => JSX.Element

	export default Fullpage
}
