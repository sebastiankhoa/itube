import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Dna } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

import { fetchFromAPI } from "utils/fetchData";
import Videos from "./Videos";

const VideoDetail = () => {
	const { id } = useParams();

	const [videos, setVideos] = useState(null);
	const [videoDetail, setVideoDetail] = useState(null);

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then((data) => setVideoDetail(data.items[0]));
		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
	}, [id]);

	if (!videoDetail?.snippet)
		return (
			<Center mt="500px">
				<Dna visible={true} height="150" width="150" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
			</Center>
		);

	const {
		snippet: { title, channelId, channelTitle, description },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	console.log(videoDetail);

	return (
		<Box minH="95vh" w="100%" color="white" mt="10">
			{/* nơi chứa video */}
			<Box w="100%" h={{ base: "400px", md: "700px", lg: "1080px" }} bg="gray">
				<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="100%" playing />
			</Box>
			{/* Nơi chứa thông tin và video liên quan */}
			<Flex px={{ base: "2", md: "10" }} direction={{ base: "column", md: "unset" }} gap="5">
				{/* title,channel title,viewcount... */}
				<Flex direction="column" gap="5" flex="1">
					<Text fontSize={{ base: "16pt", md: "25pt" }}>{title}</Text>
					<Flex justify="space-between" direction={{ base: "column", md: "unset" }}>
						<Link to={`/channel/${channelId}`}>
							<Flex align="center" gap="2">
								<Text color="red" fontWeight="700" fontSize="20pt">
									{channelTitle}
								</Text>
								<BsCheckCircleFill />
							</Flex>
						</Link>
						<Flex gap="5" color="gray.400" justify="space-between">
							<Text>{parseInt(viewCount).toLocaleString("en-US")} lượt xem</Text>
							<Text>{parseInt(likeCount).toLocaleString("en-US")} lượt thích</Text>
						</Flex>
					</Flex>
					<Text color="gray.300" fontFamily="cursive" fontSize={{ base: "9pt", md: "15pt" }}>
						{description}
					</Text>
				</Flex>
				{/* related video */}
				<Box mt="10">
					<Text fontSize={{ base: "15pt", md: "20pt" }} fontWeight="600">
						Video có nội dung tương tự
					</Text>
					<Flex
						direction="column"
						align="center"
						justify="center"
						py={{ base: "5", md: "1" }}
						gap="2"
						maxH="50vh"
						overflowY="auto"
						mt="2"
					>
						<Videos videos={videos} direction="column" />
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default VideoDetail;
