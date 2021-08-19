import sanityClient from "../lib/client";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import GalleryLayout from "../components/GalleryLayout";

export default function Home({ allArtPieces }) {
  return (
    <Box>
      <Center>
        <Text fontSize="lg">Latest Releases</Text>
      </Center>
      <GalleryLayout images={allArtPieces} />
    </Box>
  );
}

export async function getStaticProps(context) {
  const query = `
    *[_type == "artPiece"] | order(_createdAt desc) [0..9] {
      "imageUrl": image.asset->url
    }
  `;
  const allArtPieces = await sanityClient.fetch(query);

  return {
    props: { allArtPieces },
  };
}
