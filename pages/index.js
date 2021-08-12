import styles from "../styles/Home.module.css";
import { Image } from "@chakra-ui/react";
import sanityClient from "../lib/client";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import artPiece from "../studio/schemas/artPiece";

export default function Home({ allArtPieces }) {
  return (
    <Box>
      <Center>Browse by Artwork StyleLatest Features</Center>
      <Flex direction="row" justifyContent="space-between"></Flex>
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        {allArtPieces.map((artPiece) => (
          <Box key={artPiece.title} w="45%" mt="2%" mb="2%">
            <Image
              key={artPiece.title}
              src={artPiece.imageUrl}
              alt={artPiece.title}
              width="100%"
            />
          </Box>
        ))}
      </Flex>
    </Box>
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
