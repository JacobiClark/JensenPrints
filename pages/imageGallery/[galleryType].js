import sanityClient from "../../lib/client";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const galleries = ["Comic", "InkIllustration"];
  const paths = galleries.map((galleryType) => {
    return {
      params: { galleryType: galleryType },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.galleryType;
  console.log(id);
  const query = `
    *[_type == "artPiece" && artType == '${id}']{
      "imageUrl": image.asset->url
    }
    | order(_createdAt asc)
  `;
  console.log(query);
  const images = await sanityClient.fetch(query);
  console.log(images);
  return {
    props: { images: images },
  };
};

/*export async function getStaticProps(context) {
  const query = ;
  const allArtPieces = await sanityClient.fetch(query);
  console.log(allArtPieces);

  return {
    props: { allArtPieces },
  };
}*/

const gallery = ({ images }) => {
  return (
    <Flex
      direction="row"
      wrap="wrap"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {images.map((artPiece) => (
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
};

export default gallery;
