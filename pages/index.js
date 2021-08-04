import styles from "../styles/Home.module.css";
import { Image } from "@chakra-ui/react";
import sanityClient from "../lib/client";
import { Box, Flex } from "@chakra-ui/react";
import artPiece from "../studio/schemas/artPiece";

export default function Home({ allArtPieces }) {
  return (
    <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
      {allArtPieces.map((artPiece) => (
        <Box key={artPiece.title} w="40%" mt="2%" mb="2%">
          <Image
            key={artPiece.title}
            src={artPiece.imageUrl}
            alt={artPiece.title}
            width="100%"
          />
        </Box>
      ))}
    </Flex>
  );
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
  console.log(allArtPieces);

  return {
    props: { allArtPieces },
  };
}
