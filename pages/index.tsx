import Link from "next/link";

import { useSession } from "next-auth/react";

export default function IndexPage() {
  const { data: session } = useSession()

  return (
    <>
      <h1>Hello again</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <Link href="/canvas">Enter App</Link>
    </>
  );
}
