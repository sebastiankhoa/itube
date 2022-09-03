import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "utils/fetchData";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
	const [videos, setVideos] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("Popular");

	// console.log({ videos });

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
	}, [selectedCategory]);

	return (
		<Flex direction={{ base: "column", md: "unset" }} mt="10">
			<Box
				h={{ base: "auto", md: "92vh" }}
				borderRight="1px solid #3d3d3d"
				px={{ base: "0", md: "2" }}
				mb={{ base: "50px", md: "unset" }}
			>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<Text mt="10" color="gray.300" display={{ base: "none", md: "flex" }}>
					Copyright © 2022 by Khoa
				</Text>
			</Box>
			<Box h="90vh" flex="2" overflowY="auto" p="2">
				<Text fontWeight="700" color="white" fontSize="20pt">
					{selectedCategory}
				</Text>
				<Videos videos={videos} direction="row" />
			</Box>
		</Flex>
	);
};

export default Feed;
