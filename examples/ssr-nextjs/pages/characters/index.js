import Link from "next/link";
import styles from "@/styles/Characters.module.css";

export default function ({ characters }) {
  return (
    <div className={styles.characters}>
      {characters.map((item) => (
        <Link
          href="/characters/details/id"
          as={`/characters/details/${item.id}`}
        >
          <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

const getAll = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
};

export async function getStaticProps() {
  const characters = await getAll();
  return { props: { characters } };
}
