import { useRouter } from "next/router";

const HeroIndex = () => {
  const Route = useRouter();
  console.log({ Route });

  const {
    query: { id },
  } = Route;

  return <h1>Villain {id}</h1>;
};

export default HeroIndex;
