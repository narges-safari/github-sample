import { Text, Container, Input, Button, Box } from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Meta from "../../utilities/Meta";
import { useLogin } from "./Login.biz";

const Login = () => {
  const { username, setUsername } = useLogin();

  return (
    <Container
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Meta title={"Sign in to Github"} />
      <Container
        paddingTop={8}
        paddingBottom={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <Image
          width={48}
          height={48}
          alt={"github"}
          src={"/assets/GithHub.svg"}
        />
      </Container>
      <Text fontSize="2xl">Sign in to GitHub</Text>
      <Box
        padding={4}
        marginTop={6}
        borderRadius={6}
        border={"1px solid #d8dee4"}
      >
        <Text fontSize={"sm"}>Username</Text>
        <Input
          marginTop={3}
          marginBottom={4}
          borderRadius={6}
          size={"sm"}
          type={"text"}
          id={"username"}
          name={"username"}
          placeholder={"Enter your username"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          value={username}
        />

        <Link href={`/profile/${username}`}>
          <Button
            size={"sm"}
            width={"100%"}
            type={"submit"}
            colorScheme={"whatsapp"}
          >
            Submit
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
