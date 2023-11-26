import CanvasPreviewGrid from '@/components/canvas/blocks/CanvasPreviewGrid'
import { TabsProvider } from '@/contexts/TabsProvider'

import type { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { Suspense } from 'react'

import { api } from '@/lib/api'
import { NextPageWithLayout } from '@/lib/types'

import { getSession } from 'next-auth/react'

const Page: NextPageWithLayout = () => {
	const { data: canvases } = api.canvas.all.useQuery()

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CanvasPreviewGrid canvases={canvases} />
		</Suspense>
	)
}

export const getServerSideProps = (async context => {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: `/connect`,
				permanent: false
			}
		}
	}

	return {
		props: {
			session
		}
	}
}) satisfies GetServerSideProps<{ session: Session | null }>

Page.getLayout = page => <TabsProvider>{page}</TabsProvider>

export default Page
