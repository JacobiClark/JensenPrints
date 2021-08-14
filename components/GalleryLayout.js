import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const GalleryLayout = (images) => {
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
        {images.images.map((artPiece) => (
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
};
export default GalleryLayout;
