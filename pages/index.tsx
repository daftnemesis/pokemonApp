import { GetStaticProps, NextPage } from 'next'
import { FC } from 'react'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

export default function HomePage({pokemons}: Props) {

  console.log({pokemons})

  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        {
          pokemons.map((poke) => (
            <li key={poke.id}> {`${poke.id} - ${poke.name}`} </li>
          ))
        }
      </ul>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  return {
    props: {
      pokemons
    }
  }
}
