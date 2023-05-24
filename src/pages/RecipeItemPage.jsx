import {
  Box,
  Center,
  Button,
  Text,
  Flex,
  TagLeftIcon,
  Image,
  Tag,
} from "@chakra-ui/react";
import { ArrowLeftIcon, WarningIcon, InfoIcon } from "@chakra-ui/icons";
import { DivideLine } from "../components/ui/DivideLine";

export const RecipeItem = ({ choice, onClick }) => {
  choice = { recipe: choice };

  return (
    <Box>
      <Center flexDir="column" minH={"155vh"}>
        <Box
          background={"white"}
          minH={"90vh"}
          maxW={"60vw"}
          borderRadius={20}
          boxShadow={"md"}
        >
          <Button
            onClick={() => onClick()}
            background={"transparent"}
            color={"gray.800"}
            margin={"10px"}
            _hover={{ color: "gray.400" }}
          >
            <TagLeftIcon as={ArrowLeftIcon} variant="ghost"></TagLeftIcon>
          </Button>
          <Image
            objectFit={"cover"}
            src={choice.recipe.image}
            w={"75vw"}
            h={400}
          />

          <Flex flexDir={{ base: "column", md: "row" }}>
            <Flex
              flexDir={"column"}
              h="100%"
              align={{ base: "center", md: "normal" }}
              p={4}
              pb={{ base: 0, md: 4 }}
              w={{ base: "100%", md: "70%" }}
            >
              <Text fontSize={"2.2rem"} fontWeight={"bold"}>
                {choice.recipe.label}
              </Text>
              <Text
                color={"gray.500"}
                paddingTop={"5px"}
                fontSize={"0.7rem"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                {choice.recipe.mealType} · {choice.recipe.dishType}
              </Text>
              <Text
                color={"gray.500"}
                paddingTop={"5px"}
                fontSize={"0.7rem"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                {choice.recipe.yield} servings
              </Text>
              <Text
                color={"gray.500"}
                paddingTop={"5px"}
                fontSize={"0.7rem"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                {choice.recipe.totalTime} minutes cooking time
              </Text>
              <Tag my={4} padding={0} background={"transparent"}>
                {choice.recipe.healthLabels
                  .filter(
                    (health) => health === "Vegetarian" || health === "Vegan"
                  )
                  .map((health) => (
                    <Tag
                      key={self.crypto.randomUUID()}
                      label={health}
                      textTransform={"uppercase"}
                      background={"green.200"}
                      color={"green.600"}
                      fontSize={"0.7rem"}
                      gap={2}
                      marginTop={"10px"}
                    >
                      {health}
                    </Tag>
                  ))}
              </Tag>
              <DivideLine />

              <Text
                paddingBottom={"5px"}
                fontWeight={"bold"}
                color={"gray.700"}
                fontSize={"1.2rem"}
              >
                Ingredients
              </Text>
              <Box fontSize={"1rem"} width={"400"}>
                {choice.recipe.ingredientLines.map((ingredients) => (
                  <Text key={self.crypto.randomUUID()}>{ingredients}</Text>
                ))}
              </Box>
              <DivideLine />

              <Text
                paddingBottom={"5px"}
                fontWeight={"bold"}
                color={"gray.700"}
                fontSize={"1.2rem"}
              >
                Nutrients
              </Text>

              <Flex flexWrap={"wrap"} gap={"8"} paddingBottom={2}>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Calories <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.ENERC_KCAL.quantity)}
                  kcal
                </Text>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Fat <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.FAT.quantity)}g
                </Text>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Carbs <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.CHOCDF.quantity)}g
                </Text>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Protein
                    <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.PROCNT.quantity)}g
                </Text>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Cholesterol <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.CHOLE.quantity)}mg
                </Text>
                <Text fontSize={"0.9rem"}>
                  <Text color={"gray.500"}>
                    Sodium <br />
                  </Text>
                  {Math.round(choice.recipe.totalNutrients.NA.quantity)}mg
                </Text>
              </Flex>

              <DivideLine />
            </Flex>

            <Flex
              w={{ base: "100%", md: "50%" }}
              h="100%"
              align={{ base: "center", md: "normal" }}
              flexDir="column"
              p={4}
              pt={{ base: 0, md: 4 }}
            >
              <Text paddingTop={"10px"} fontWeight={"bold"} fontSize={"1.5rem"}>
                Health
              </Text>
              <Flex
                paddingTop={"10px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recipe.healthLabels.map((health) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    label={health}
                    textTransform={"uppercase"}
                    padding={"5px"}
                    background={"gray.100"}
                    color={"gray.600"}
                    fontSize={"0.7rem"}
                    gap={2}
                  >
                    {health}
                  </Tag>
                ))}
              </Flex>
              <DivideLine />
              <Text paddingTop={"10px"} fontWeight={"bold"} fontSize={"1.5rem"}>
                Diet
              </Text>
              <Flex
                paddingTop={"10px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recipe.dietLabels.map((diet) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    label={diet}
                    textTransform={"uppercase"}
                    padding={"5px"}
                    background={"blue.100"}
                    color={"blue.600"}
                    fontSize={"0.7rem"}
                  >
                    <TagLeftIcon as={InfoIcon}></TagLeftIcon>
                    {diet}
                  </Tag>
                ))}
              </Flex>
              <DivideLine />
              <Text paddingTop={"10px"} fontWeight={"bold"} fontSize={"1.5rem"}>
                Cautions
              </Text>
              <Flex
                paddingTop={"10px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recipe.cautions.map((caution) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    label={caution}
                    textTransform={"uppercase"}
                    padding={"5px"}
                    background={"red.100"}
                    color={"red.600"}
                    fontSize={"0.7rem"}
                  >
                    <TagLeftIcon as={WarningIcon}></TagLeftIcon>
                    {caution}
                  </Tag>
                ))}
                <DivideLine />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
