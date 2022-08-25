import type { User } from "./Profile.types";
import React from "react";
import Meta from "../../../utilities/Meta";
import {
  Box,
  Grid,
  Icon,
  Text,
  Image,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import { IoPeopleOutline } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import UserInfo from "../../../components/UserInfo";
import Repositories from "./Repositories";

const Profile = ({ user }: { user: User }) => {
  return (
    <Box marginX={{ base: 4, sm: 4, md: 6, lg: 32, "2xl": 80 }}>
      <Meta title={`${user.login}(${user.name})`} />
      <Grid
        gap={6}
        h={"200px"}
        paddingY={8}
        padding={{ xg: 8, sm: 1, md: 1 }}
        gridTemplateColumns={{ base: "100%", sm: "100%", md: "296px 1fr" }}
      >
        <GridItem>
          <Box
            display={"flex"}
            flexDirection={{ sm: "row", md: "column" }}
            alignItems={{ base: "center", sm: "center", md: "unset" }}
          >
            <Image
              alt={"avatar"}
              borderRadius={"50%"}
              src={user.avatar_url}
              width={{ base: 74, sm: 74, md: 296 }}
              height={{ base: 74, sm: 74, md: 296 }}
              marginRight={{ base: 4, sm: 4, md: 0 }}
            />
            <Box paddingY={4}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                {user.name}
              </Text>
              <Text fontSize={"xl"}>{user.login}</Text>
            </Box>
          </Box>
          <Text>{user.bio}</Text>
          <Box
            paddingY={4}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Icon marginRight={1} as={IoPeopleOutline} />
            <Text fontSize={"sm"}>
              {user.followers} followers . {user.following} following
            </Text>
          </Box>
          {user.company && (
            <UserInfo text={user.company} icon={CgOrganisation} />
          )}
          {user.location && <UserInfo text={user.location} icon={GoLocation} />}
          {user.blog && <UserInfo text={user.blog} icon={FiLink} />}
          {user.twitter_username && (
            <UserInfo text={`@${user.twitter_username}`} icon={BsTwitter} />
          )}
        </GridItem>
        <GridItem>
          <Heading marginBottom={4} size={"md"}>
            Repositories
          </Heading>
          <Grid templateColumns={{ sm: "100%", md: "repeat(2, 1fr)" }} gap={4}>
            <Repositories
              reposUrl={user.repos_url}
              publicRepos={user.public_repos}
            />
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
