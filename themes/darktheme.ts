import { createTheme } from '@nextui-org/react'

//archivo encargado de exportar el tema de modo 'dark' para la aplicacion
//esta es la fonfiguracion por defecto, pero es posible cambiar los colores del theme
//desde la propiedad colors del objeto

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}
  }
})