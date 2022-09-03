// @ts-nocheck
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

import { fetchFromAPI } from "utils/fetchData";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
	const { id } = useParams();

	const [channel, setChannel] = useState();
	const [videos, setVideos] = useState(null);

	console.log("du lieu video", videos);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
			setChannel(data?.items[0]);

			const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
			setVideos(videoData?.items);
		};
		fetchData();
	}, [id]);

	return (
		<Flex w="full" minH="95vh" color="white" pos="relative" direction="column" align="center">
			<Box w="full" h="300px" bgGradient="linear(to-r,red,pink,green)" />
			<Flex pos="absolute" top="230px" direction="column" align="center" gap="5">
				<Image alt="logo" src={channel?.snippet?.thumbnails?.high?.url} rounded="full" w={{ base: "100px", md: "150px" }} />
				<Flex align="center" gap="2" justify="center">
					<Text fontSize="21pt" fontWeight="700">
						{channel?.snippet?.title}
					</Text>
					<Box color="gray.300">
						<BsCheckCircleFill />
					</Box>
				</Flex>
				<Text color="gray.400">{parseInt(channel?.statistics?.subscriberCount).toLocaleString("en-US")} người đăng ký</Text>
			</Flex>
			<Box mt="200px">
				<Videos videos={videos} />
			</Box>
		</Flex>
	);
};

export default ChannelDetail;
