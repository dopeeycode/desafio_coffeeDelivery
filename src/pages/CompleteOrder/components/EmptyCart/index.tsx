import * as S from "./styles";

export default function EmptyCart() {
  return (
    <S.EmptyCardContainer>
      <img src="/empty-cart.svg" alt="" />
      <h1>Seu carrinho está <span>vazio</span> !</h1>
      <p>Não há itens no seu carrinho.</p> 
    </S.EmptyCardContainer>
  )
}
