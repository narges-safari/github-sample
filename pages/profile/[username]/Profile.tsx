import React from "react";
import Meta from "../../../utilities/Meta";
import { Container } from "@chakra-ui/react";
import type { User } from "./Profile.types";

const profile = ({ user }: { user: User }) => {
  return (
    <Container>
      <Meta title={`${user.login}(${user.name})`} />
    </Container>
  );
};

export default profile;
