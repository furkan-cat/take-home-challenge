"use client";

import { MessageIcon, OctIcon, PullRequestIcon } from "@/public/svg";
import {
  Badge,
  Box,
  Grid,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import moment from "moment";
import Avatar from "../avatar";
import { isColorDark } from "@/utils/helpers";

export default function TableItem(props) {
  const { data } = props;
  //   const {
  //     icon,
  //     title,
  //     isssueId,
  //     created,
  //     user,
  //     badge,
  //     linkedPullRequest,
  //     replyCount,
  //   } = props;
  const [isS] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
  });
  const [isXs] = useMediaQuery("(max-width: 545px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Box p="16px" borderTop="1px" borderBottom="0.5px" borderColor="border.100">
      <Grid templateColumns={isS ? "none" : "4fr repeat(1, 1fr)"}>
        <Box wordBreak="break-word">
          <OctIcon fill="red.500" display="inline" mb={1} />
          <Text
            color="text.200"
            display="inline"
            fontSize={16}
            fontWeight={600}
            ml={1.5}
          >
            {data.title}
          </Text>
          <Text display="inline">
            {data.labels?.map((badge) => (
              <Badge
                key={badge.name}
                bg={`#${badge.color}`}
                color={isColorDark(badge.color) ? "#fff" : "#000"}
                borderRadius={10}
                display="inline"
                fontSize={12}
                fontWeight={600}
                mx={1}
                px="7px"
                py="2px"
                textTransform="lovercase"
                title={badge.description}
              >
                {badge.name}
              </Badge>
            ))}
          </Text>
        </Box>

        <Grid
          alignItems="center"
          display={isS ? "none" : "grid"}
          justifyItems="end"
          templateColumns="repeat(3, auto)"
        >
          {data.milestone ? (
            <HStack>
              <PullRequestIcon />
              <Text fontSize={12} fontWeight={600} color="text.300">
                {data.milestone}
              </Text>
            </HStack>
          ): <span></span>}
          {data.assignee ? (
            <HStack>
              <Avatar src="https://bit.ly/dan-abramov" />
            </HStack>
          ) : <span></span>}
          {data.comments > 0 ? (
            <HStack>
              <MessageIcon />
              <Text fontSize={12} fontWeight={600} color="text.300">
                {data.comments}
              </Text>
            </HStack>
          ): <span></span>}
        </Grid>
      </Grid>
      <HStack fontSize={12} color="text.100">
        <Text>
          #{data.number} opened on{" "}
          {moment.parseZone(data.created_at).format("MMM DD, YYYY")} by{" "}
          {data.user?.login}
        </Text>
      </HStack>
    </Box>
  );
}
