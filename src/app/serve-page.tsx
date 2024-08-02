import HeroList from "../components/HeroList";
import { HeroType } from "../types/HeroType";
import ClientPage from "./client-page";
async function fetchHeroes(): Promise<HeroType[]> {
  const res = await fetch(
    "http://homologacao3.azapfy.com.br/api/ps/metahumans"
  );
  const heroes = await res.json();
  return heroes;
}

export default async function ServerPage() {
  const heroes = await fetchHeroes();

  return (
    <div className="container mx-auto p-4">
      <ClientPage heroes={heroes} />
    </div>
  );
}
