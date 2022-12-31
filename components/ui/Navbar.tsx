import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {

  const { theme } = useTheme()

  const style = {
    backgroundColor: theme?.colors.gray50.value
  }

  return (
    <nav style={style}>

      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='pokemon' width={70} height={70} priority />

      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>

      <Spacer css={{flex: 1}} />

      <Text color='white'  >Favoritos</Text>

    </nav>
  )
}
