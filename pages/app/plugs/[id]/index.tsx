import { useSession } from "next-auth/react"

import BlockiesSvg from "blockies-react-svg"
import { Ellipsis, GitFork, SearchIcon, Share } from "lucide-react"

import { Container, Header } from "@/components/app"
import { ActionsFrame } from "@/components/app/frames/plugs/[id]/actions"
import { ExecuteFrame } from "@/components/app/frames/plugs/[id]/execute"
import { ManageFrame } from "@/components/app/frames/plugs/[id]/manage"
import { ShareFrame } from "@/components/app/frames/plugs/[id]/share"
import { ActionView } from "@/components/app/plugs/actions/action-view"
import { Button } from "@/components/buttons"
import { Search } from "@/components/inputs"
import { useFrame } from "@/contexts"
import { usePlugs } from "@/contexts/PlugProvider"
import { cardColors, routes } from "@/lib/constants"
import { formatAddress, formatTimeSince } from "@/lib/functions"
import { useNavigation } from "@/lib/hooks/useNavigation"
import { NextPageWithLayout } from "@/lib/types"

const Page: NextPageWithLayout = () => {
	const { data: session } = useSession()
	const { id, from } = useNavigation()
	const { handleFrameVisible } = useFrame()
	const { plug, handle } = usePlugs(id)

	const own =
		plug !== undefined && session && session.address === plug.userAddress

	if (!plug) return null

	return (
		<Container>
			<div className="flex min-h-[calc(100vh-80px)] flex-col">
				<Header
					size="lg"
					back={from ?? routes.app.plugs.mine}
					icon={
						<div
							className="h-6 w-6 min-w-6 rounded-md"
							style={{
								backgroundImage: cardColors[plug.color]
							}}
						/>
					}
					label={plug.name === "" ? "Untitled Plug" : plug.name}
					nextOnClick={
						own ? () => handleFrameVisible("manage") : () => {}
					}
					nextLabel={
						own ? (
							<Ellipsis size={14} className="opacity-60" />
						) : (
							<div className="flex flex-row items-center gap-2">
								<BlockiesSvg
									address={plug.userAddress}
									className="h-5 w-5 rounded-md"
								/>
								<p className="text-sm font-bold opacity-40">
									{formatAddress(plug.userAddress)}
								</p>
							</div>
						)
					}
					nextEmpty={own === false}
				/>

				<div className="mb-4 flex flex-row items-center gap-4">
					<div className="font-bold opacity-40">
						Last updated {formatTimeSince(plug.updatedAt)}
					</div>

					<Button
						variant="secondary"
						className="group ml-auto p-1"
						onClick={() =>
							handle.plug.fork({
								id: plug.id,
								from: from ?? undefined
							})
						}
					>
						<GitFork
							size={14}
							className="opacity-60 group-hover:opacity-80"
						/>
					</Button>

					<Button
						variant="secondary"
						className="group p-1"
						onClick={() => handleFrameVisible("share")}
					>
						<Share
							size={14}
							className="opacity-60 group-hover:opacity-80"
						/>
					</Button>
				</div>

				<ActionView />
			</div>

			<Container className="fixed bottom-0 left-0 right-0 flex flex-col overflow-y-visible">
				<div className="absolute bottom-[150px] left-0 right-0 top-0 z-[-1] bg-gradient-to-t from-white to-white/0" />
				<div className="absolute bottom-0 left-0 right-0 z-[-1] h-[150px] bg-white" />

				{own && (
					<Search
						className="z-[4] pt-16"
						icon={<SearchIcon size={14} className="opacity-60" />}
						placeholder="Search protocols and actions"
						handleOnClick={() => handleFrameVisible("actions")}
					/>
				)}

				<div className="mb-4 mt-2 flex flex-row gap-2">
					<Button
						variant="secondary"
						className="w-max"
						onClick={() => handleFrameVisible("socket-run")}
					>
						Run
					</Button>

					<Button
						className="w-full"
						onClick={() => handleFrameVisible("socket-schedule")}
					>
						Schedule
					</Button>
				</div>
			</Container>

			<>
				<ExecuteFrame />
				<ManageFrame />
				<ActionsFrame />
				<ShareFrame />
			</>
		</Container>
	)
}

export default Page
