export { default } from "./Profile";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userRes = await fetch(
    `https://api.github.com/users/${context.params?.username}`
  );

  const user = await userRes.json();

  return {
    props: {
      user,
    },
  };
};
