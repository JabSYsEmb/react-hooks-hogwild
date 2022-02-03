import React from "react";
import Nav from "./Nav";
import ItemGrid from "./ItemGrid";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<h1> it works </h1>
			{/* <ItemGrid items={hogs}/> */}
		</div>
	);
}

export default App;
