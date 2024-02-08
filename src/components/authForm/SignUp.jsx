import { useState } from 'react';

import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
  });

  const { loading, error, signUp, isLoading } = useSignUpWithEmailAndPassword();

  return (
    <>
      <Input
        placeholder='Email'
        type='email'
        size={'sm'}
        value={inputs.email}
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <Input
        placeholder='Username'
        type='text'
        size={'sm'}
        value={inputs.userName}
        onChange={(e) => {
          setInputs({ ...inputs, userName: e.target.value });
        }}
      />
      <Input
        placeholder='Full Name'
        type='text'
        size={'sm'}
        value={inputs.fullName}
        onChange={(e) => {
          setInputs({ ...inputs, fullName: e.target.value });
        }}
      />
      <InputGroup>
        <Input
          placeholder='password'
          fontSize={14}
          type={showPassword ? 'text' : 'password'}
          size={'sm'}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
        />
        <InputRightElement h='full'>
          <Button
            variant={'ghost'}
            size={'sm'}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={'full'}
        colorScheme='blue'
        size={'sm'}
        fontSize={14}
        isLoading={isLoading}
        onClick={() => {
          signUp(inputs);
        }}
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
