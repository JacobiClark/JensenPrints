import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const StoryboardLayout = (images) => {
  console.log(images.images[0].images);
  return (
    <Box>
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={["space-around", "space-between"]}
        alignItems="flex-start"
      >
        {images.images[0].images.map((image) => (
          <Box key={image} w={["50%", "48%"]} mt="1%" mb="1%">
            <Image key={image} src={image} alt={image} width="100%" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default StoryboardLayout;
