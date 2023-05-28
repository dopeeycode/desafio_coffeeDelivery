import { Coffees } from "../../../../@types/Coffes";

interface CoffeeProps {
  coffee: Coffees
}


export default function CoffeesCard({ coffee }: CoffeeProps) {

  return (
    <div>
      <p>{coffee.name}</p>
      {coffee.tags.map(tag => (
        <p>{tag}</p>
      ))}
      <img src={`/cofes/${coffee.photo}`} alt="" />
    </div>
  )
}
