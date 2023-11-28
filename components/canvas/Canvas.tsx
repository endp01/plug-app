import { type FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'

import { DragEndEvent } from '@dnd-kit/core'
import { createSnapModifier } from '@dnd-kit/modifiers'
import { Coordinates } from '@dnd-kit/utilities'

import { Position } from '@/components/drag/position/position'
import Toolbar from '@/components/viewport/toolbar'
import { useTabs } from '@/contexts/TabsProvider'
import { api } from '@/lib/api'
import { ItemTypes } from '@/lib/constants'
import CanvasStore from '@/lib/store'

import { DraggableStory } from '../drag/DraggableStory'
import { Grid } from '../drag/grid/grid'

export type CanvasProps = {
	frame: string
	id: string
}

export const Canvas: FC<PropsWithChildren<CanvasProps>> = ({
	id,
	children
}) => {
	const { handleAdd } = useTabs()

	const [initialCanvas] = api.canvas.get.useSuspenseQuery(id)
	const [canvas, setCanvas] = useState(initialCanvas)

	const addComponent = api.canvas.component.add.useMutation()
	const moveComponent = api.canvas.component.move.useMutation({
		onMutate(componentPosition) {
			const { component } = componentPosition

			const { id, top, left } = component

			handleMove({ id, top, left })
		}
	})

	const [gridSize, setGridSize] = useState(30)

	const style = {
		alignItems: 'flex-start'
	}

	const buttonStyle = {
		marginLeft: gridSize - 20 + 1,
		marginTop: gridSize - 20 + 1,
		width: gridSize * 8 - 1,
		height: gridSize * 2 - 1
	}

	const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize])

	const handleMove = ({
		id,
		top,
		left
	}: {
		id: string
		top: number
		left: number
	}) => {
		setCanvas(prevCanvas => {
			if (!prevCanvas) return prevCanvas

			const index = prevCanvas.components.findIndex(c => c.id === id)

			if (index === -1) return prevCanvas

			const newCanvas = { ...prevCanvas }
			newCanvas.components[index] = {
				...newCanvas.components[index],
				top,
				left
			}

			return newCanvas
		})
	}

	const components = useMemo(() => {
		return canvas.components.reduce(
			(acc, component) => {
				acc[component.id] = component
				return acc
			},
			{} as Record<string, (typeof canvas.components)[0]>
		)
	}, [canvas])

	useEffect(() => {
		if (!canvas) return

		handleAdd({
			label: canvas.name,
			color: canvas.color,
			href: `/canvas/${canvas.id}`,
			active: true
		})
	}, [canvas, handleAdd])

	// * This is the function that allowed react-dnd to work with an infinite canvas.
	// const [, drop] = useDrop(
	// 	() => ({
	// 		accept: [ItemTypes.Box, ItemTypes.Markdown],
	// 		drop(item: DragItem, monitor) {
	// 			const delta = monitor.getDifferenceFromInitialOffset()
	//
	// 			if (!delta) return
	//
	// 			let { id, top, left } = item
	//
	// 			left = Math.round(left + delta.x)
	// 			top = Math.round(top + delta.y)
	//
	// 			if (snapToGrid) [left, top] = snapToGrid(left, top)
	//
	// 			moveComponent.mutate({
	// 				id: canvas.id,
	// 				component: { id, left, top }
	// 			})
	// 		}
	// 	}),
	// 	[moveComponent]
	// )

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const isShiftClick = e.shiftKey
		const isCtrlClick = e.ctrlKey
		const isCommandClick = e.metaKey
		const isAltClick = e.altKey

		const ready =
			isShiftClick || isCommandClick || isCtrlClick || isAltClick

		if (!ready) return

		const width = 400
		const left = CanvasStore.pointer.x - width / 2
		const top = CanvasStore.pointer.y - width / 4
		const type = ItemTypes.Plug

		addComponent.mutate({
			id,
			component: {
				left,
				top,
				type,
				width,
				height: width,
				content: ''
			}
		})
	}

	if (!canvas) return null

	return (
		<>
			{/* ? This is what powers the ability to zoom in and out of the canvas. */}
			<div
				className="w-screen h-full overscroll-none"
				style={{
					transform: `scale(${
						(CanvasStore.scale.x, CanvasStore.scale.y)
					})`,
					transformOrigin: 'top left'
				}}
				onClick={handleClick}
			>
				<Grid size={gridSize} onSizeChange={setGridSize}>
					<DraggableStory
						modifiers={[snapToGrid]}
						style={style}
						buttonStyle={buttonStyle}
						key={gridSize}
					/>
				</Grid>
			</div>

			<Toolbar />
		</>
	)
}

export default Canvas
