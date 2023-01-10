import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar';

//Componente encargado de crear el layout principal de la aplicacion, el cual sera 
//mostrado en toda la aplicacion

//se crean los props necesarior para poder pasar las properties de los componentes, como son el caso
//de children y title
type Props = {
  children?: React.ReactNode,
  title: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout:FC<Props> = ({ children, title }) => {

  return (
    <>
      {/* componente Head para agregar los metatags de la pagina */}
      <Head> 
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Jose Lozano" />
        <meta name="description" content="Informacion acerda del pokemon XXXX" />
        <meta name="keywords" content="XXXXX, pokemon, pokedex" />

        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Pagina sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
      </Head>

      <Navbar />

      <main className="main-container">
        { children }
      </main>
    </>
  )
}
