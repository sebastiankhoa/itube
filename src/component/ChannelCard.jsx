import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "utils/constant";

const ChannelCard = ({ channel }) => {
	console.log({ channel });
	const {
		id: { channelId },
		snippet,
	} = channel;

	return (
		<Flex direction="column" w="320px" h="300px" align="center" justify="center">
			<Link to={`/channel/${channelId}`}>
				<Image
					alt={snippet?.title}
					src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					h="240px"
					_hover={{ transform: "scale(1.05)" }}
					transition="0.5s"
					rounded="full"
				/>
				<Flex align="center" gap="1" justify="center" mt="5">
					<Text color="white">{snippet?.channelTitle}</Text>
					<Box color="gray.400">
						<BsCheckCircleFill />
					</Box>
				</Flex>
				{channel?.statistics?.subscriberCount && (
					<Text color="gray.400">{parseInt(channel?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers</Text>
				)}
			</Link>
		</Flex>
	);
};
export default ChannelCard;
