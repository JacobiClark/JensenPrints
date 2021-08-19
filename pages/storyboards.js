import sanityClient from "../lib/client";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home({ storyBoardCoverImages }) {
  console.log(storyBoardCoverImages);
  return (
    <Box w={["90%", "45%"]}>
      <Image
        key={storyBoardCoverImages[0].imageUrl}
        src={storyBoardCoverImages[0][0].imageUrl}
        alt={storyBoardCoverImages[0].imageUrl}
        width="100%"
        height="300px"
      />
    </Box>
  );
}

export async function getStaticProps(context) {
  const soarCoverImageQuery = `
      *[_type == "imageGallery" && galleryName == "Soar"]
        {"imageUrl" : images[0].asset->url}
    `;
  const soarCoverImage = await sanityClient.fetch(soarCoverImageQuery);

  const nightDriveCoverImageQuery = `
      *[_type == "imageGallery" && galleryName == "Night Drive"]
        {"imageUrl" : images[0].asset->url}
    `;
  const nightDriveCoverImage = await sanityClient.fetch(
    nightDriveCoverImageQuery
  );

  const storyBoardCoverImages = [soarCoverImage, nightDriveCoverImage];

  return {
    props: { storyBoardCoverImages },
  };
}
