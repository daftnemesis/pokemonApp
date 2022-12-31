import Head from "next/head"
import { FC } from "react"

//Componente encargado de crear el layout principal de la aplicacion, el cual sera 
//mostrado en toda la aplicacion

//se crean los props necesarior para poder pasar las properties de los componentes, como son el caso
//de children y title
type Props = {
  children?: React.ReactNode,
  title: string
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
      {/* componente Head para agregar los metatags de la pagina */}
      <Head> 
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Jose Lozano" />
        <meta name="description" content="Informacion acerda del pokemon XXXX" />
        <meta name="keywords" content="XXXXX, pokemon, pokedex" />
      </Head>

      {/* TODO: Navbar */}

      <main>
        { children }
      </main>
    </>
  )
}
