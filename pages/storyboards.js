import sanityClient from "../lib/client";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ storyBoardCoverImages }) {
  console.log(storyBoardCoverImages);
  return (
    <Flex
      direction="row"
      wrap="wrap"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      {storyBoardCoverImages.map((coverImage) => {
        return (
          <Link
            href={"/storyboards/" + coverImage[0].galleryName}
            passHref={true}
            key={coverImage[0].galleryName}
          >
            <Box
              as="a"
              key={coverImage[0].galleryName}
              w={["90%", "45%"]}
              mt="2%"
              mb="2%"
            >
              <Center>
                <Text>{coverImage[0].galleryName}</Text>
              </Center>
              <Image
                key={coverImage[0].imageUrl}
                src={coverImage[0].imageUrl}
                alt={coverImage[0].imageUrl}
                width="100%"
                height="300px"
              />
            </Box>
          </Link>
        );
      })}
    </Flex>
  );
}

export async function getStaticProps(context) {
  const soarCoverImageQuery = `
    *[_type == "imageGallery" && galleryName == "Soar"]
      {
        "galleryName" : galleryName,
        "imageUrl" : images[0].asset->url,
        "slug" : slug.current
      }
  `;
  const soarCoverImage = await sanityClient.fetch(soarCoverImageQuery);

  const nightDriveCoverImageQuery = `
    *[_type == "imageGallery" && galleryName == "Night Drive"]
      {
        "galleryName" : galleryName,
        "imageUrl" : images[0].asset->url,
        "slug" : slug.current
      }
  `;
  const nightDriveCoverImage = await sanityClient.fetch(
    nightDriveCoverImageQuery
  );

  const storyBoardCoverImages = [soarCoverImage, nightDriveCoverImage];

  return {
    props: { storyBoardCoverImages },
  };
}
