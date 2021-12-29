import React from 'react';
import tw from 'twin.macro';

import { hot } from 'react-hot-loader/root';
import {
    ChakraProvider,
    Box,
    Button,
    Fade,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Main = () => {

    const {isOpen, onToggle} = useDisclosure();

    return (
        <ChakraProvider>
        
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Button onClick={onToggle}>Click Me</Button>
            <Fade in={isOpen}>
                <Box
                    p="40px"
                    color="white"
                    mt="4"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                >
             Fade
                </Box>
            </Fade>
            <h2 css={tw`text-center`}></h2>
        </ChakraProvider>
    );

};

export default hot(Main);
