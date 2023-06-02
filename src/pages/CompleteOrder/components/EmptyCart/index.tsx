import * as S from "./styles";

export default function EmptyCart() {
  return (
    <S.EmptyCardContainer>
      <img src="/empty-cart.svg" alt="" />
      <h1>Seu carrinho está <span>vazio</span> !</h1>
      <p>Você deve adicionar itens no carrinho antes de processeguir com o pagamento.</p> 
    </S.EmptyCardContainer>
  )
}
