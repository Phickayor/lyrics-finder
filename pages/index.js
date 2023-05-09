
import Search from '@/Components/Search'
import Results from '@/Components/Results'
import { useState } from 'react'

export default function Home() {

  const [summary, setSummary] = useState()
  function setResults(info) {
    console.log(info)
    setSummary(<Results results={info} />)
  }
  return (
    <>
      <Search resultHandler={setResults} />
      {summary}
    </>
  )
}
