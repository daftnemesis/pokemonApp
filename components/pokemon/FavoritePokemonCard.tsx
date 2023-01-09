import { Grid, Card } from '@nextui-org/react'
import React from 'react'
import Router, { useRouter } from 'next/router';

type Props = {
  id: number
}

const FavoritePokemonCard = ({id}: Props) => {

  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`)

  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} >
      <Card isHoverable isPressable css={{padding: 10}} onPress={onFavoriteClicked}>

        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={140} />

      </Card>
    </Grid>
  )
}

export default FavoritePokemonCard