export { default } from "./Profile";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${context.params?.username}`),
    fetch(`https://api.github.com/users/${context.params?.username}/repos`),
  ]);

  const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);

  console.log("repos", repos);

  return {
    props: {
      user,
      repos,
    },
  };
};
