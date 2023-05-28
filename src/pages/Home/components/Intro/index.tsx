import { IntroImg } from "../../../../assets/directoryImage";
import { CartIconWithInfo, CoffeeIconWithInfo, IconsInfoContainer, IntroContainer, PackageIconWithInfo, TimerIconWithInfo } from "./styles";

import { ShoppingCartSimple, Timer, Package, Coffee } from 'phosphor-react'

export default function IntroPage() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>  

        <IconsInfoContainer>
          <ul>
            <CartIconWithInfo>
              <div>
                <ShoppingCartSimple size={20} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </CartIconWithInfo>
            <TimerIconWithInfo>
              <div>
                <Timer size={20} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </TimerIconWithInfo>
          </ul>
          <ul>
            <PackageIconWithInfo>
              <div>
                <Package size={20} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </PackageIconWithInfo>
            <CoffeeIconWithInfo>
              <div>
                <Coffee size={20} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </CoffeeIconWithInfo>
          </ul>
         </IconsInfoContainer>
      </div>
      <div>
        <img src={IntroImg} alt="" />
      </div>
    </IntroContainer>
  )
}
