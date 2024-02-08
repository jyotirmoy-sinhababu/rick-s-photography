import { Flex, Box, Container, Image, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/authForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          <Box display={{ base: 'none', md: 'block' }}>
            {/* <Image src='/auth.png' alt='instagram image' /> */}
          </Box>
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app.</Box>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
