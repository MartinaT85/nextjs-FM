import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Note Index Page</h1>
      <Link href='/notes/[id]' as={`/notes/1`}>
      <a>

        note 1
      </a>
      </Link>
    </div>
  )
}

export default Page