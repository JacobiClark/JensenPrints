import sanityClient from "../../lib/client";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import StoryBoardLayout from "../../components/StoryboardLayout";

export const getStaticPaths = async () => {
  const storyboards = ["Soar", "NightDrive"];
  const paths = storyboards.map((slug) => {
    return {
      params: { slug: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  console.log(slug);
  const query = `
    *[_type == "imageGallery" && galleryName == '${slug}'] {
      "images": images[].asset->url
    }
  `;
  const images = await sanityClient.fetch(query);
  return {
    props: { images: images },
  };
};

const storyboardGallery = ({ images }) => {
  return <StoryBoardLayout images={images} />;
};

export default storyboardGallery;
