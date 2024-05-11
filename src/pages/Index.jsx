import { useState } from "react";
import { Box, Image, Container, Text, VStack, Button, SimpleGrid } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const productImages = ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlldyUyMDF8ZW58MHx8fHwxNzE1NDEyODMwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1554248889-15c8ca7dbba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlldyUyMDJ8ZW58MHx8fHwxNzE1NDEyODMwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1528795336402-85f2e50fbb2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlldyUyMDN8ZW58MHx8fHwxNzE1NDEyODMxfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1656657121748-980acf6fef7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlldyUyMDR8ZW58MHx8fHwxNzE1NDEyODMxfDA&ixlib=rb-4.0.3&q=80&w=1080"];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">3D Product Showcase</Text>
        <Box position="relative" width="300px" height="300px">
          <Image src={productImages[currentImage]} boxSize="300px" objectFit="cover" borderRadius="md" />
          <SimpleGrid columns={2} position="absolute" top="50%" width="100%" transform="translateY(-50%)" px={2}>
            <Button onClick={handlePrev} leftIcon={<FaArrowLeft />} colorScheme="teal" variant="solid">
              Prev
            </Button>
            <Button onClick={handleNext} rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
              Next
            </Button>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
