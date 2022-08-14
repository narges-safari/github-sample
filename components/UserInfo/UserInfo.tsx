import React from "react";
import { NextPage } from "next";
import { IUserInfoProps } from "./UserInfo.types";
import { Box, Icon, Text } from "@chakra-ui/react";

const UserInfo: NextPage<IUserInfoProps> = ({ text, icon }) => {
  return (
    <Box
      paddingTop={2}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Icon marginRight={1} as={icon} />
      <Text fontSize={"sm"}>{text}</Text>
    </Box>
  );
};

export default UserInfo;
