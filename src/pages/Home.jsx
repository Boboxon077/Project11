import React from 'react'
import useFetch from '../hooks/useFetch'
import ReciepieList from '../components/ReciepieList'

function Home() {
  const { data:recipies, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <>
      {recipies && <ReciepieList recipies={recipies}/>}

    </>
  )
}

export default Home