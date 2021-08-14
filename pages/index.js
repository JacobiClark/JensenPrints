import styles from "../styles/Home.module.css";
import { Image } from "@chakra-ui/react";
import sanityClient from "../lib/client";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import artPiece from "../studio/schemas/artPiece";
import GalleryLayout from "../components/GalleryLayout";
import { gl } from "../lib/gl";

export default function Home({ allArtPieces }) {
  return <GalleryLayout images={allArtPieces} />;
}

export async function getStaticProps(context) {
  const query = `
    *[_type == "artPiece"]{
  title,
  slug,
  "imageUrl": image.asset->url
}
  `;
  const allArtPieces = await sanityClient.fetch(query);

  return {
    props: { allArtPieces },
  };
}
