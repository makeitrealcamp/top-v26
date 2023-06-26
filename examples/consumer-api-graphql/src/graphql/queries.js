import { gql } from "@apollo/client";

export const GET_ONE = gql`
  query client($id: Int) {
    client(id: $id) {
      id
      name
      phone
    }
  }
`;

export const GET_CLIENTS = gql`
  query {
    clients {
      id
      name
      phone
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation AddClient($name: String, $phone: String) {
    addClient(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;
