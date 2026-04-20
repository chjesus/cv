import { motion } from 'motion/react'

type AnimatedBoxProps = {
	children: React.ReactNode
	translateX?: number
	translateY?: number
	delay?: number
}

const AnimationFade = (props: AnimatedBoxProps) => {
	const { children, translateX = 0, translateY = 0, delay = 0.3 } = props

	return (
		<motion.div
			initial={{ x: translateX, y: translateY, opacity: 0 }}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			transition={{
				duration: 0.8,
				delay,
				ease: [0.39, 0.575, 0.565, 1.0],
			}}
			viewport={{ once: true, amount: 0.2 }}
		>
			{children}
		</motion.div>
	)
}

export default AnimationFade
