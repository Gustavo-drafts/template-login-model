import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { CloseButton, Content, Overlay } from './styles';



export function Modal() {
  const [opt, setOpt] = useState<boolean>(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000)
  }, []) 



  return (
    <Dialog.Root open={open}>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>{!opt ? 'Login' : 'Register'}</Dialog.Title>

          <CloseButton onClick={() => setOpen(!open)} >
            <X size={24} />
          </CloseButton>

          {opt ? (

            <form action=''>
              <input type="text" placeholder='nome' required />
              <input type="email" placeholder='exemplo@email.com' required />
              <input type="password" placeholder='senha' required />
              <input type="passwordConfirm" placeholder='repita a senha' required />

              <span>
                <a onClick={() => setOpt(!opt)}>Login</a>

                <button type="submit">
                  Submeter
                </button>
              </span>
            </form>
          ) : (

            <form action=''>
              <input type="email" placeholder='exemplo@email.com' required />
              <input type="password" placeholder='senha' required />

              <span>
                <a onClick={() => setOpt(!opt)}>Sign Up</a>

                <button type="submit">
                  Submeter
                </button>
              </span>

            </form>
          )}

        </Content>
      </Dialog.Portal >
    </Dialog.Root>
  )
}