import React from 'react';
import { Input,InputGroup,InputLeftElement, border } from '@chakra-ui/react';
import Search_icon from '../Assets/Search_icon.svg';

const SearchBar = () => {
    return (
    <InputGroup maxWidth={258} bg='#E4E4E4' maxHeight={40} borderRadius={4}>
      <InputLeftElement pointerEvents='none'>
        <img src={Search_icon} alt="" />
      </InputLeftElement>
      <Input outline='none' border='none'  _placeholder={{ color: 'black' }}  placeholder='Search Tata Neu' />
    </InputGroup>
    );
};

export default SearchBar;