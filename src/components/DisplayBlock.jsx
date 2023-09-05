import { Flex, Box } from "@chakra-ui/react";

const getDisplaySize = ({ width, height }) => {
  if (width === height) return { displayWidth: 400, displayHeight: 400 };
  if (width > height)
    return { displayWidth: 400, displayHeight: height / (width / 400) };
  return { displayWidth: width / (height / 400), displayHeight: 400 };
};

export const DisplayBlock = ({ imageText, width, height }) => {
  const { displayWidth, displayHeight } = getDisplaySize({ width, height });

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={displayWidth}
      h={displayHeight}
      bg="black"
    >
      <Box fontSize={20} color="white">
        {imageText}
      </Box>
    </Flex>
  );
};
