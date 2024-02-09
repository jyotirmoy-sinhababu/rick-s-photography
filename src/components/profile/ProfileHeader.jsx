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
import useLogout from '../../hooks/useLogout';

import EditProfile from './EditProfile';
import { CiLogout } from 'react-icons/ci';
import CreatePostBtn from '../button/CreatePostBtn';

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authUser = useSelector((state) => state.auth.user);
  const { handleLogout, isLoggingOut } = useLogout();

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

          <Flex pl={'74px'} gap={'12px'} alignItems={'center'}>
            <CreatePostBtn />
            <Button
              display={'flex'}
              justifyContent={'center'}
              bg={'white'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.800' }}
              size={{ base: 'xs', md: 'sm' }}
              onClick={handleLogout}
              isLoading={isLoggingOut}
            >
              <CiLogout /> Log out
            </Button>
          </Flex>
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
