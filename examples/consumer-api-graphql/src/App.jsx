import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Stack } from "react-bootstrap";
import AddClient from "./components/AddClient";
import { GET_CLIENTS, ADD_CLIENT, GET_ONE } from "./graphql/queries";
import { client } from "./graphql/ApolloClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const {
    loading: loadingById,
    error: errorById,
    data: clientFound,
    refetch,
  } = useQuery(GET_ONE);

  const [
    addClient,
    { loading: addingClient, error: errorAddClient, data: clientData },
  ] = useMutation(ADD_CLIENT);

  if (error || errorById) return <div className="error">Error!!</div>;
  if (loading || loadingById)
    return <div className="in-progress">Loading!!</div>;

  const handleAddClient = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    addClient({
      variables: { name, phone },
    });

    await client.refetchQueries({
      include: "active",
    });
  };
  const { clients } = data;

  const searchOne = async (e) => {
    refetch({ id: +e.target.value });
  };

  return (
    <Container fluid={true}>
      <Stack direction="horizontal" gap={3}>
        <div>
          <AddClient handleSubmit={handleAddClient} />
        </div>
        <div className="vr" />
        <div>
          {clients &&
            clients.map((item) => (
              <div key={item.name}>
                <h6>
                  {item.id}: {item.name}: {item.phone}
                </h6>
              </div>
            ))}
        </div>
        <div className="vr" />
        <div>
          <h2>Search by id:</h2>
          <input type="text" onChange={searchOne} />
          <h3>{clientFound?.client?.name}</h3>
        </div>
      </Stack>
    </Container>
  );
}

export default App;
