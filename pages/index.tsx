import { Inter } from '@next/font/google'
import {Button} from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Button color='secondary' shadow bordered>Click Me</Button>
    </>
  )
}
