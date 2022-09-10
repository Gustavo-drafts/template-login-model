import { createStitches } from '@stitches/react'

// exporta-se a desetruturação de 'createStitches' para poder usar todas as funções na aplicação:
export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme
} = createStitches({
  theme: {
    // difinir valores e propriedades CSS default
    //  tipo de formato usado no Stitches obj {}:

    // ex:
    //  valorCss: 'numero | propriedades'

    colors: {
      corDeFundo: '#22222E',

      azul300: '#3A85AF',
      azul200: '#ACD1FD',
      azul100: '#958BE7',
      
      cinza100: '#323238',
      cinza200: '#8D8D99',
      
      verde100: '#00B37E',
      verde200: '#00470F',

      white: '#ffffff',

    },
  }
})