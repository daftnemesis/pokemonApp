import { Inter } from '@next/font/google'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Layout title='Listado de Pokemons'>
      <Button color='secondary' shadow bordered>Click Me</Button>
    </Layout>
  )
}
