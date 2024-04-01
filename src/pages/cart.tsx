import { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { CartFooter } from '../components/Cart/CartFooter'
import { CartHeader } from '../components/Cart/CartHeader'
import { CartItem } from '../components/Cart/CartItem'
import { CartItemMobile } from '../components/Cart/CartItemMobile'
import { CartContainer } from '../components/Container'
import { Message } from '../components/Message'
import { Separator } from '../components/Separator'
import { CartContext } from '../context/CartContext'

export function Cart() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <>
      <Helmet title="Cart" />
      <CartContainer>
        {cartItems.length === 0 ? (
          <Message
            text="Parece que não há nada por aqui :("
            image="/empty-cart.svg"
            buttonName="Recarregar página"
            handleClick={() => navigate('/')}
          />
        ) : (
          <>
            <CartHeader />
            {cartItems.map((cart) => (
              <Fragment key={cart.id}>
                <CartItem cart={cart} />
                <CartItemMobile cart={cart} />
              </Fragment>
            ))}
            <Separator />
            <CartFooter />
          </>
        )}
      </CartContainer>
    </>
  )
}
