import { AddressContent, CompletedOrder, Container, ContainerMethodPayment, ContentAfterContainer, InputContainer, MethodPaymentButtons, NeighborhoodCityAndUF, NumberAndComplement } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export default function CompleteOrderPage() {
  return (
    <CompletedOrder>
      <Container>
        <h3>Complete seu pedido</h3>
        <ContentAfterContainer>
          <AddressContent>
          <MapPinLine size={24} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressContent>
          <form>
            <InputContainer>
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />

              <NumberAndComplement>
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </NumberAndComplement>
              <NeighborhoodCityAndUF>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </NeighborhoodCityAndUF>
            </InputContainer>

          </form>
        </ContentAfterContainer>
        <div>
        <ContainerMethodPayment>
          <div>
            <CurrencyDollar size={24} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <MethodPaymentButtons>
            <button type="button">
              <CreditCard size={20} />
              CARTÃO DE CREDITO
            </button>
            <button type="button">
              <Bank size={20} />
              CARTÃO DE DEBITO
            </button>
            <button type="button">
              <Money size={20} />
              DINHEIRO
            </button>
          </MethodPaymentButtons>
        </ContainerMethodPayment>
        </div>
      </Container>
      <div>
        teste
      </div>
    </CompletedOrder>
  )
}
