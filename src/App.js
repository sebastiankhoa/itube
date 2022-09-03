import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./component";

const Home = () => {
	return (
		<BrowserRouter>
			<Box w="100%" bg="#000">
				<Navbar />
				<Routes>
					<Route path="/" element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default Home;
