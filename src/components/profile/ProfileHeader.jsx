import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  VStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';

const ProfileHeader = () => {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <AvatarGroup
        gap={{ base: 'xl', md: '2xl' }}
        justifyContent={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}
      >
        <Avatar src='' alt='profile pic' />
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Button
            bg={'white'}
            color={'black'}
            _hover={{ bg: 'whiteAlpha.800' }}
            size={{ base: 'xs', md: 'sm' }}
          >
            Edit Profile
          </Button>
          <Button
            bg={'white'}
            color={'black'}
            _hover={{ bg: 'whiteAlpha.800' }}
            size={{ base: 'xs', md: 'sm' }}
          >
            Create post
          </Button>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {authUser.fullName}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'lg' }}>{authUser.userName}</Text>
        </Flex>
        <Text fontSize={'sm'}>{authUser.bio}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
