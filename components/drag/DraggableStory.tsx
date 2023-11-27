import React, { useMemo, useState } from 'react'

import {
	DndContext,
	KeyboardSensor,
	Modifiers,
	MouseSensor,
	PointerActivationConstraint,
	TouchSensor,
	useDraggable,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import {
	createSnapModifier,
	restrictToHorizontalAxis,
	restrictToVerticalAxis,
	restrictToWindowEdges,
	snapCenterToCursor
} from '@dnd-kit/modifiers'
import type { Coordinates } from '@dnd-kit/utilities'

import { Axis, Draggable } from '@/components/drag/draggable/draggable'
import { Grid } from '@/components/drag/grid/grid'
import { OverflowWrapper } from '@/components/drag/overflow/wrapper'
import { Wrapper } from '@/components/drag/wrapper/wrapper'
import CanvasStore from '@/lib/store'

const defaultCoordinates = {
	x: 0,
	y: 0
}

interface Props {
	activationConstraint?: PointerActivationConstraint
	axis?: Axis
	handle?: boolean
	modifiers?: Modifiers
	buttonStyle?: React.CSSProperties
	style?: React.CSSProperties
	label?: string
}

export function DraggableStory({
	activationConstraint,
	axis,
	handle,
	modifiers,
	style,
	buttonStyle
}: Props) {
	const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates)
	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint
	})
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint
	})
	const keyboardSensor = useSensor(KeyboardSensor, {})
	const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor)

	return (
		<DndContext
			sensors={sensors}
			onDragEnd={props => {
				const { delta } = props
				setCoordinates(({ x, y }) => {
					return {
						x: x + delta.x,
						y: y + delta.y
					}
				})
			}}
			modifiers={modifiers}
		>
			<Wrapper>
				<DraggableItem
					id="a"
					axis={axis}
					handle={handle}
					top={y - CanvasStore.screen.y}
					left={x - CanvasStore.screen.x}
					style={style}
					buttonStyle={buttonStyle}
				/>

				<DraggableItem
					id="b"
					axis={axis}
					handle={handle}
					top={y - CanvasStore.screen.y}
					left={x - CanvasStore.screen.x}
					style={style}
					buttonStyle={buttonStyle}
				/>

				<DraggableItem
					id="c"
					axis={axis}
					handle={handle}
					top={y - CanvasStore.screen.y}
					left={x - CanvasStore.screen.x}
					style={style}
					buttonStyle={buttonStyle}
				/>
			</Wrapper>
		</DndContext>
	)
}

interface DraggableItemProps {
	id: string
	handle?: boolean
	style?: React.CSSProperties
	buttonStyle?: React.CSSProperties
	axis?: Axis
	top?: number
	left?: number
}

function DraggableItem({
	axis,
	id,
	style,
	top,
	left,
	handle,
	buttonStyle
}: DraggableItemProps) {
	const { attributes, isDragging, listeners, setNodeRef, transform } =
		useDraggable({
			id
		})

	return (
		<Draggable
			id={id}
			ref={setNodeRef}
			dragging={isDragging}
			handle={handle}
			label={''}
			listeners={listeners}
			style={{ ...style, top, left }}
			buttonStyle={buttonStyle}
			transform={transform}
			axis={axis}
			{...attributes}
		/>
	)
}

export const SnapToGrid = () => {
	const [gridSize, setGridSize] = React.useState(30)

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

	return (
		<>
			<OverflowWrapper>
				<DraggableStory
					modifiers={[snapToGrid]}
					style={style}
					buttonStyle={buttonStyle}
					key={gridSize}
				/>

				<Grid size={gridSize} onSizeChange={setGridSize} />
			</OverflowWrapper>
		</>
	)
}