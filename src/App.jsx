import { Box, Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeItem } from "./pages/RecipeItemPage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const greeting = "Winc Recipe Checker";

  return (
    <Box className="App">
      <Center flexDir="column" minHeight={"100vh"} bg={"gray.300"}>
        {userChoice ? (
          <RecipeItem choice={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <Heading
              marginTop={"50px"}
              textAlign={"center"}
              color={"gray.800"}
              fontSize={"3rem"}
            >
              {greeting}
            </Heading>
            <RecipeListPage onClick={setUserChoice} />
          </>
        )}
      </Center>
    </Box>
  );
};
