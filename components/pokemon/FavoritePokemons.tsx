import { Grid, Card } from '@nextui-org/react'
import React from 'react'
import FavoritePokemonCard from './FavoritePokemonCard'

type Props = {
  pokemons: number[]
}

const FavoritePokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map(id => (
          <FavoritePokemonCard id={id} key={id} />
        ))
      }
    </Grid.Container>
  )
}

export default FavoritePokemons