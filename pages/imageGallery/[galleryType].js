import sanityClient from "../../lib/client";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import GalleryLayout from "../../components/GalleryLayout";

export const getStaticPaths = async () => {
  const galleries = ["Comic", "InkIllustration"];
  const paths = galleries.map((galleryType) => {
    return {
      params: { galleryType: galleryType },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.galleryType;
  const query = `
    *[_type == "artPiece" && artType == '${id}']{
      "imageUrl": image.asset->url
    }
    | order(_createdAt asc)
  `;
  const images = await sanityClient.fetch(query);
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
  return <GalleryLayout images={images} />;
};

export default gallery;
