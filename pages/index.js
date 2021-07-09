import Image from "next/image";
import styles from "../styles/Home.module.css";
import sanityClient from "../lib/client";

export default function Home() {
  return <div className={styles.container}></div>;
}

export async function getStaticProps({ preview = false }) {
  const query = `
    *[_type == "product"]
  `;
  const allPosts = await sanityClient.fetch(query);
  console.log(allPosts);

  return {
    props: { allPosts },
  };
}
