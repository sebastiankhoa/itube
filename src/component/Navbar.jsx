import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import { logo } from "utils/constant";

const Navbar = () => {
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	const searchByEnter = (e) => {
		if (e.key === "Enter") {
			if (searchTerm) {
				navigate(`/search/${searchTerm}`);
				setSearchTerm("");
			}
		}
	};

	return (
		<Flex
			align="center"
			p="2"
			px={{ base: "unset", md: "10" }}
			pos="sticky"
			top="0"
			justify="space-between"
			zIndex={99}
			direction={{ base: "column", md: "unset" }}
			gap="2"
		>
			<Link to="/">
				<Flex align="center" gap="2">
					<Image alt="logo" src={logo} w="50px" />
					<Text color="white" fontFamily="pacifico" fontWeight="700" fontSize="20pt">
						iTUBE
					</Text>
				</Flex>
			</Link>
			<Flex rounded="20px" bg="white" align="center" px="5">
				<Input
					type="text"
					placeholder="Tìm kiếm video..."
					border="none"
					_focus={{ shadow: "none" }}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyPress={searchByEnter}
				/>
				<Button variant="unstyled" onClick={(e) => handleSubmit(e)}>
					<AiOutlineSearch size="1.5rem" color="red" />
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;
