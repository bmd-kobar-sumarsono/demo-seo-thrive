import { useRouter } from "next/router";

const HeroIndex = () => {
  const Route = useRouter();
  console.log({ Route });

  const { query } = Route;
  const { id, cityID } = query;

  return (
    <h1>
      Villain: {id} / City: {cityID}
    </h1>
  );
};

export default HeroIndex;
