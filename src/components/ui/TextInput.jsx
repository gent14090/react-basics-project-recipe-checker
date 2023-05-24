import { SearchIcon } from "@chakra-ui/icons";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return (
    <Center>
      <InputGroup my={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
        />
        <Input
          onChange={onChange}
          bg={"white"}
          w={{ md: 500 }}
          placeholder="Search for recipe"
        />
      </InputGroup>
    </Center>
  );
};
