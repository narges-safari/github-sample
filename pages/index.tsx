import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Login from "./login";

const Home: NextPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default Home;
