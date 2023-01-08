import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {

  const { theme } = useTheme()

  const style = {
    backgroundColor: theme?.colors.gray50.value
  }

  return (
    <nav style={style}>

      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='pokemon' width={70} height={70} priority />

      <NextLink legacyBehavior href={'/'} passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>


      <Spacer css={{flex: 1}} />

      <NextLink href={'/favorites'}>
        <Text color='white' >Favoritos</Text>
      </NextLink>

    </nav>
  )
}
