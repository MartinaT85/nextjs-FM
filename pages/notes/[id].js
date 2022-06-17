import React from "react";
import {useRouter} from 'next/router'

const Page = () => {
  const router = useRouter()

  const {id} = router.query
  

  return (
    <div>
      <h1>Note Page</h1>
      <p>Note {id}</p>
      <button onClick={e => router.push('/')}>Go Home</button>
    </div>
  )
}

export default Page