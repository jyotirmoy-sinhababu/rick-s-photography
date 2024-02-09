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

import EditProfile from './EditProfile';

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authUser = useSelector((state) => state.auth.user);

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        justifyContent={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}
      >
        <Avatar src={authUser.profilePicURL} alt='profile pic' />
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={'row'}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Button
            bg={'white'}
            color={'black'}
            _hover={{ bg: 'whiteAlpha.800' }}
            size={{ base: 'xs', md: 'sm' }}
            onClick={onOpen}
          >
            Admin Profile
          </Button>
          <Button
            bg={'white'}
            color={'black'}
            _hover={{ bg: 'whiteAlpha.800' }}
            size={{ base: 'xs', md: 'sm' }}
          >
            Upload Picture
          </Button>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            Full name:- {authUser.fullName}
          </Text>
          <Text fontSize={{ base: 'sm' }} fontWeight={'bold'}>
            {' '}
            User name:- {authUser.userName}
          </Text>
        </Flex>
        <Text fontSize={'sm'} fontWeight={'bold'}>
          Bio:- {authUser.bio}
        </Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
