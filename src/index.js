import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/pacifico";
import "@fontsource/roboto";
import "./index.css";

import App from "./App";
import theme from "./chakra/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
