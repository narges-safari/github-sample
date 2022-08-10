export { default } from "./Profile";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.github.com/users/${context.params?.username}`
  );

  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};
