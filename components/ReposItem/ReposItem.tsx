import { Box, Icon, Tag, Text } from "@chakra-ui/react";
import { GoRepo } from "react-icons/go";
import { IReposItemProps } from "./ReposItem.types";
import { NextPage } from "next";

const ReposItem: NextPage<IReposItemProps> = ({
  name,
  description,
  language,
  isPrivate,
}) => {
  const languageColorRenderer = (language: string) => {
    switch (language) {
      case "JavaScript":
        return "#f1e05a";
      case "TypeScript":
        return "#3178c6";
      case "HTML":
        return "#e34c26";
      case "CSS":
        return "#563d7c";
      case "Ruby":
        return "#701516";
      case "Python":
        return "#3572A5";
      case "C":
        return "#555555";
      case "Emacs Lisp":
        return "#c065db";
      case "CoffeeScript":
        return "#244776";
      case "Go":
        return "#00ADD8";
    }
  };

  return (
    <Box
      marginBottom={4}
      height={125}
      padding={4}
      paddingBottom={0}
      borderRadius={6}
      border={"1px solid #d0d7de"}
    >
      <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <Icon as={GoRepo} />
        <Text color={"#0969da"} fontWeight={600} marginX={2}>
          {name}
        </Text>
        <Tag size={"sm"} variant={"outline"}>
          {isPrivate ? "private" : "public"}
        </Tag>
      </Box>
      <Text marginY={2} fontSize={"xs"}>
        {description}
      </Text>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Box
          borderRadius={"50%"}
          backgroundColor={languageColorRenderer(language)}
          border={"1px solid #1b1f241a"}
          height={3}
          width={3}
        />
        <Text marginLeft={1} fontSize={"sm"} color={"#57606a"}>
          {language}
        </Text>
      </Box>
    </Box>
  );
};

export default ReposItem;
