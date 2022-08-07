import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Meta from "../utilities/Meta";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Sign in to Github" />
      <Link href={"/profile/random-user"}>Go to profile page</Link>
    </div>
  );
};

export default Home;
