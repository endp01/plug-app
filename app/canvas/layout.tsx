import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Hud from './components/Hud'
import { TabsProvider } from '@/contexts/TabProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: PropsWithChildren) {
  return (
    <TabsProvider>
      <Hud>
        {children}
      </Hud>
    </TabsProvider>
  )
}