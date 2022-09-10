import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: '#00000075',
})


export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: '12px',
  padding: '2.5rem 3rem',
  background: '$corDeFundo',
  color: '$white',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  form: {
    marginTop: '2rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    input: {
      borderRadius: '6px',
      border: 0,
      background: '#0f0f0f',
      padding: '1rem',

      color: '#fff',

      '&:hover': {
        outline: '1px solid $cinza100',
      }
    },
    button: {
      marginLeft: '14vw',
      height: '2.5rem',
      width: '12rem',
      border: 0,
      borderRadius: '8px',
      background: '$verde100',
      color: '$white',
      fontWeight: 'bold',
      padding: '0 1.25rem',

      '&:hover': {
        transition: '0.3s',
        background: '$verde200',
      },
    },

    a: {
      color: '$white',
      
      '&:hover': {
        color: '$verde100',
      },

    },
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: '0',
  cursor: 'pointer',
  color: '$cinza200',

  '$:hover': {
    color: '$white',
  },
})