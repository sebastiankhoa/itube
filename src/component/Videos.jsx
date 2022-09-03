import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import VideoCard from "./VideoCard";
import { Dna } from "react-loader-spinner";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
	// console.log(videos);
	if (!videos?.length)
		return (
			<Center mt="500px">
				<Dna visible={true} height="150" width="150" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
			</Center>
		);

	return (
		<Flex direction={direction || "row"} flexWrap="wrap" gap="5" px={{ base: "10", md: "80px", lg: "2" }}>
			{videos.map((item) => (
				<div key={item.id.videoId}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channel={item} />}
				</div>
			))}
		</Flex>
	);
};
export default Videos;
