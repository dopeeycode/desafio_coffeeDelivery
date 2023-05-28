import { useEffect, useState } from "react";
import IntroPage from "./components/Intro";
import { api } from "../../services/api";

interface contents {
  contents: [
    coffes
  ]
}


interface coffes{
  description: string;
  name: string;
  photo: string;
  price: number;
  tag: [String];
  id: string;
}


export default function HomePage() {
  const[data, setData] = useState<coffes[]>([])

  useEffect(() => {
    const loadData = async () => {
      const { data: coffees } = await api.get('/coffe')
      setData(coffees[0].contents)
    }

    loadData()

  }, [])

  console.log(data)
  



  return (
    <main>
      <IntroPage />
    </main>
  )
}
