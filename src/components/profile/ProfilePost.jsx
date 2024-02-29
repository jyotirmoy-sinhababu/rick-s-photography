import {
  Avatar,
  Button,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useState } from 'react';
import useShowToast from '../../hooks/useShowToast';

import { MdDelete } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../slice/PostSlice';

import { storage, firestore } from '../../firebase/Firebase';
import { deleteObject, ref } from 'firebase/storage';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const ProfilePost = ({ post }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const showToast = useShowToast();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    if (isDeleting) return;

    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore, 'users', authUser.uid);
      await deleteDoc(doc(firestore, 'posts', post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      dispatch(deletePost(post.id));
      showToast('Success', 'Post deleted successfully', 'success');
    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <GridItem
        cursor={'pointer'}
        borderRadius={4}
        overflow={'hidden'}
        border={'1px solid'}
        borderColor={'whiteAlpha.300'}
        position={'relative'}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Image
          src={post?.imageURL}
          alt='profile post'
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={'white'} />
          <ModalBody bg={'grey'} pb={5}>
            <Flex
              gap='4'
              w={{ base: '90%', sm: '70%', md: 'full' }}
              mx={'auto'}
              maxH={'fitContent'}
              minH={'fitContent'}
              flexDir={'column-reverse'}
            >
              <Flex
                borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}
                flex={1.5}
                justifyContent={'center'}
                alignItems={'center'}
              >
                {
                  <Image
                    src={post?.imageURL}
                    alt='profile post'
                    fit={'contain'}
                    w={'100%'}
                    h={'100%'}
                  />
                }
              </Flex>
              <Flex
                flex={1}
                flexDir={'column'}
                px={10}
                display={{ md: 'flex' }}
              >
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar
                      src={authUser.profilePicURL}
                      size={'sm'}
                      name='As a Programmer'
                    />
                    <Text fontWeight={'bold'} fontSize={12} color={'white'}>
                      {authUser.userName}
                    </Text>
                  </Flex>

                  <Button
                    size={'sm'}
                    bg={'transparent'}
                    _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                    borderRadius={4}
                    p={1}
                    onClick={handleDelete}
                    isLoading={isDeleting}
                    color={'white'}
                  >
                    <MdDelete size={20} cursor='pointer' />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
