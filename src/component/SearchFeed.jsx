import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "utils/fetchData";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const SearchFeed = () => {
	const { searchTerm } = useParams();

	const [videos, setVideos] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("New");

	// console.log({ videos });

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
	}, [searchTerm]);

	return (
		<Flex direction={{ base: "column", md: "unset" }} mt="10">
			<Box h="90vh" w="full" overflowY="auto" px={{ base: "unset", xl: "2" }}>
				<Text color="white" fontSize="20pt">
					Tất cã kết quả tìm kiếm cho <span style={{ color: "green", textTransform: "uppercase" }}>{searchTerm} </span>
				</Text>
				<Videos videos={videos} direction="row" />
			</Box>
		</Flex>
	);
};

export default SearchFeed;
