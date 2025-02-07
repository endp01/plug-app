import { FC, useState } from "react"

import { Badge, CheckCircle, Link, Send, Sparkle, Twitter } from "lucide-react"
import { Pen } from "lucide-react"

import { Button } from "@/components/buttons"
import { Search } from "@/components/inputs"
import { useFrame, usePlugs } from "@/contexts"
import { routes, useClipboard } from "@/lib"
import { api } from "@/server/client"

import { Frame } from "../base"

export const FeatureRequestFrame = () => {
	const { frameVisible, handleFrameVisible } = useFrame()

	const [message, setMessage] = useState("")

	const isFrame = frameVisible
		? frameVisible.split("-")[0] === "featureRequest"
		: false
	const from = frameVisible ? frameVisible.split("-")[1] : undefined

	const handleFeatureRequest = api.misc.featureRequest.useMutation({
		onMutate: () => {
			setMessage("")
			handleFrameVisible(`featureRequestSubmit-${from}`)
		}
	})

	return (
		<>
			<Frame
				icon={<Sparkle size={18} className="opacity-60" />}
				label="Feature Request"
				visible={isFrame}
				handleBack={from ? () => handleFrameVisible(from) : undefined}
				hasOverlay={true}
			>
				<div className="flex flex-col items-center gap-2">
					<p className="mb-4 w-full opacity-60">
						Have a piece of feedback or feature request to submit?
						Feel free to share more details about your request.
					</p>

					<p className="flex w-full font-bold">Message</p>

					<Search
						className="w-full"
						icon={<Pen size={14} className="opacity-60" />}
						placeholder="Have specific details to share? Go ahead!"
						search={message}
						handleSearch={setMessage}
						textArea={true}
					/>

					{message && message.length > 360 && (
						<p className="w-full text-sm opacity-60">
							Woah! You wrote us an essay. Thank you. Your time
							and effort is very much appreciated.
						</p>
					)}

					<Button
						variant={
							message && message.length > 4
								? "primary"
								: "disabled"
						}
						className="mt-4 w-full"
						onClick={() =>
							handleFeatureRequest.mutate({
								context: "",
								message
							})
						}
						disabled={!message || message.length < 4}
					>
						{message && message.length > 4
							? "Submit Request"
							: "Write Feedback"}
					</Button>
				</div>
			</Frame>

			<Frame
				icon={<CheckCircle size={18} className="opacity-60" />}
				label="Feature Request Submit"
				visible={frameVisible?.split("-")[0] === "featureRequestSubmit"}
			>
				<div className="flex flex-col items-center gap-2">
					<p className="w-full opacity-60">
						Your feedback has been submitted. Thank you for your
						feedback. Our team will look into it soon!
					</p>

					{from && (
						<Button
							variant="primary"
							className="mt-4 w-full"
							onClick={() => handleFrameVisible(from)}
						>
							Continue
						</Button>
					)}
				</div>
			</Frame>
		</>
	)
}
