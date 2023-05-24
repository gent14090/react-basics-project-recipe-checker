import { InfoIcon, WarningIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Tag,
  TagLeftIcon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ onClick }) => {
  const recipes = data.hits;

  const [search, setSearch] = useState("");

  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const recipeCard = recipe
    .filter((recipe) => {
      return search.toLowerCase() === ""
        ? recipe
        : recipe.label.toLowerCase().includes(search);
    })
    .map((recipe) => (
      <Box
        _hover={{ transform: "scale(1.05)" }}
        key={recipe.id}
        maxW={300}
        background={"white"}
        borderRadius={20}
        objectFit={"cover"}
        alignItems={"center"}
        boxShadow="md"
        onClick={() => onClick(recipe)}
      >
        <Image
          objectFit={"cover"}
          src={recipe.image}
          width={300}
          height={250}
          borderTopRadius={"20px"}
        />

        {/* Type maaltijd */}
        <Text
          color={"grey"}
          paddingTop={"10px"}
          fontSize={"0.7rem"}
          textTransform={"uppercase"}
        >
          {recipe.mealType} · {recipe.dishType}
        </Text>

        {/* Recept naam */}
        <Text
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          paddingRight={"15px"}
          paddingLeft={"15px"}
        >
          {recipe.label}
        </Text>

        {/* Gezondheidslabels */}
        <Wrap justify="center" my={8} spacing={2}>
          {recipe.healthLabels
            .filter((health) => health === "Vegetarian" || health === "Vegan")
            .map((health) => (
              <WrapItem key={self.crypto.randomUUID()}>
                <Tag
                  label={health}
                  textTransform={"uppercase"}
                  background={"green.200"}
                  color={"green.600"}
                  fontSize={"0.6rem"}
                >
                  <TagLeftIcon as={CheckIcon} />
                  {health}
                </Tag>
              </WrapItem>
            ))}
          {recipe.dietLabels.map((diet) => (
            <WrapItem key={self.crypto.randomUUID()}>
              <Tag
                label={diet}
                textTransform={"uppercase"}
                background={"blue.200"}
                color={"blue.600"}
                fontSize={"0.6rem"}
              >
                <TagLeftIcon as={InfoIcon} />
                {diet}
              </Tag>
            </WrapItem>
          ))}
          {recipe.cautions.map((caution) => (
            <WrapItem key={self.crypto.randomUUID()}>
              <Tag
                label={caution}
                textTransform={"uppercase"}
                background={"red.200"}
                color={"red.600"}
                fontSize={"0.6rem"}
              >
                <TagLeftIcon as={WarningIcon} />
                {caution}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    ));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      <Box
        gap={"2rem"}
        display={"flex"}
        marginTop={"2rem"}
        textAlign={"center"}
        flexWrap={"wrap"}
        mb={"20px"}
        justifyContent={"center"}
      >
        {recipeCard}
      </Box>
    </>
  );
};
