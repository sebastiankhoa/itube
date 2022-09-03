import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "utils/constant";

const VideoCard = ({ video }) => {
	// console.log("data", snippet);

	const {
		id: { videoId },
		snippet,
	} = video;
	return (
		<Flex direction="column" w="320px" h="310px">
			<Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
				<Image
					alt={snippet?.title}
					src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					h="240px"
					_hover={{ transform: "scale(1.05)" }}
					transition="0.5s"
				/>
				<Text color="white">{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Text>
			</Link>
			<Box>
				<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
					<Flex align="center" gap="1">
						<Text color="gray.400">{snippet?.channelTitle || demoChannelTitle}</Text>
						<Box color="gray.400">
							<BsCheckCircleFill />
						</Box>
					</Flex>
				</Link>
				<Flex justify="space-between">
					<Text color="gray.400">{snippet?.publishTime.split("T")[0]}</Text>
					<Text color="gray.400">{snippet?.publishTime.split("T")[1].split("Z")[0]}</Text>
				</Flex>
			</Box>
		</Flex>
	);
};
export default VideoCard;
