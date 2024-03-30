import NextLink from "next/link";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import { OctIcon } from "@/public/svg";

export default function NoData() {
  return (
    <VStack py={16} gap={4}>
      <OctIcon w={5} h={5} fill="text.100" />
      <Heading as="h3" size="md">
        No results matched your search.
      </Heading>
      <Text color="text.200">
        You could search{" "}
        <Link as={NextLink} href="/" color="link.100">
          all of GitHub
        </Link>{" "}
        or try an{" "}
        <Link as={NextLink} href="/" color="link.100">
          advanced search
        </Link>
        .
      </Text>
    </VStack>
  );
}
