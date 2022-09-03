import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { categories } from "utils/constant";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Flex
			direction={{ base: "unset", md: "column" }}
			gap={{ base: "3", md: "8" }}
			px="2"
			py={{ base: "5", md: "unset" }}
			overflowX={{ base: "scroll", md: "unset" }}
		>
			{categories.map((cat) => (
				<Flex
					align="center"
					cursor="pointer"
					px="2"
					py="1"
					role="group"
					key={cat.name}
					gap="2"
					bg={cat.name === selectedCategory ? "red" : "black"}
					rounded="20px"
					_hover={{ bg: "red" }}
					justify={{ base: "unset", md: "start" }}
					transition="0.5s"
					onClick={() => setSelectedCategory(cat.name)}
				>
					<Box
						fontSize={{ base: "unset", md: "1.5rem" }}
						color={cat.name === selectedCategory ? "white" : "red"}
						_groupHover={{ color: "white" }}
					>
						{cat.icon}
					</Box>
					<Text fontWeight="700" color="gray.300" fontSize={{ base: "8pt", md: "13pt" }}>
						{cat.name}
					</Text>
				</Flex>
			))}
		</Flex>
	);
};

export default Sidebar;
