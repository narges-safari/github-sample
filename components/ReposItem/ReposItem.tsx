import { Box, Icon, Tag, Text } from "@chakra-ui/react";
import { GoRepo } from "react-icons/go";
import { IReposItemProps } from "./ReposItem.types";
import { NextPage } from "next";
import { useReposItem } from "./ReposItem.biz";

const ReposItem: NextPage<IReposItemProps> = ({
  name,
  language,
  isPrivate,
  description,
}) => {
  const { languageColorRenderer } = useReposItem();
  return (
    <Box
      marginBottom={{ md: 4 }}
      height={{ sm: "auto", md: 161, lg: 125 }}
      padding={4}
      borderRadius={6}
      border={"1px solid #d0d7de"}
    >
      <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <Icon as={GoRepo} />
        <Text fontSize={"sm"} color={"#0969da"} fontWeight={600} marginX={2}>
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
