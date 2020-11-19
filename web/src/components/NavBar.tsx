import React from "react";
import { Box, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="#BEE3F8" p={4}>
      <Box fontSize={32}>KBLSN</Box>
      <Box ml={"auto"} textAlign={"center"}>
        <NextLink href="/login">
          <Link mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={2}>register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
