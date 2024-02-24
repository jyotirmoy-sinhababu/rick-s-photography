import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';

import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfilePosts from '../../components/profile/ProfilePosts';

const ProfilePage = () => {
  return (
    <Container maxW='container.lg' py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={'full'}
        mx={'auto'}
        flexDirection={'column'}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={'full'}
        mx={'auto'}
        borderTop={'1px solid'}
        borderColor={'whiteAlpha.300'}
        direction={'column'}
      >
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SkeletonCircle size='24' />

      <VStack
        alignItems={{ base: 'center', sm: 'flex-start' }}
        gap={2}
        mx={'auto'}
        flex={1}
      >
        <Skeleton height='12px' width='150px' />
        <Skeleton height='12px' width='100px' />
      </VStack>
    </Flex>
  );
};
