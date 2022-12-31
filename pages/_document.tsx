import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'


//Este componente es para controlar todo el documento de la aplicacion
// desde aqui se puede controlar cosas como por ejemplo el lenguaje de la aplicacon
// y en este caso se tiene que usar el CssBaseline para la configuracion de NextUi
export default function Document() {
  return (
    <Html lang="en">
      <Head>{ CssBaseline.flush() }</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
