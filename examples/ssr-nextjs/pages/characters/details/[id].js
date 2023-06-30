export default function ({ character }) {
  return <div>Details by {character.name}</div>;
}

const getAll = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
};

const getOne = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
};

/*
 /1
 /2
 */
export async function getStaticPaths() {
  const data = await getAll();
  return {
    //paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    paths: data,
    fallback: true,
  };
}

// static page
export async function getStaticProps({ params }) {
  const { id } = params;
  const character = await getOne(id);
  return { props: { character } };
}
