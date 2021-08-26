import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const GalleryLayout = (images) => {
  return (
    <Box>
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={["space-around", "space-between"]}
        alignItems="flex-start"
      >
        {images.images.map((artPiece) => (
          <Box key={artPiece.imageUrl} w={["90%", "30%"]} mt="2%" mb="2%">
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
