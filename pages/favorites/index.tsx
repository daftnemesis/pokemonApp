import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts/Layout';
import NoFavorites from '../../components/ui/NoFavorites';
import { useState } from 'react';
import { localFavorites } from '../../utils';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';

export const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])
  

  return (
    <Layout title='favoritos'>
      {
        favoritePokemons.length === 0 ? 
          <NoFavorites />
        : 
          <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default Favorites