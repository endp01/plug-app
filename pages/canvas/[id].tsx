import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Viewport from '@/components/canvas/Viewport'
import { TabsProvider } from '@/contexts/TabsProvider'
import { NextPageWithLayout } from '@/lib/types'

type PageProps = {
	id: string
}

const Page: NextPageWithLayout<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
	return <Viewport id={id} />
}

export const getServerSideProps = (async context => {
	const { id } = context.query

	if (!id || Array.isArray(id)) throw new Error('Single id required.')

	const props = { id }

	return {
		props
	}
}) satisfies GetServerSideProps<PageProps>

Page.getLayout = page => <TabsProvider>{page}</TabsProvider>

export default Page
