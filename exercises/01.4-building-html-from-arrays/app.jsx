import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// Only update the value of this array
const navlinkItems = [
	{
		id: 0,
		contentLi: (
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link to google.com
				</a>
			</li>
		),
	},
	{
		id: 1,
		contentLi: (
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link to facebook.com
				</a>
			</li>
		),
	},
	{
		id: 2,
		contentLi: (
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link to amazon.com
				</a>
			</li>
		),
	},
];
let mapeadoNavLinkItems = navlinkItems.map((navLinkItem) => {
	return navLinkItem.contentLi;
});

const content = <ul className="nav">{mapeadoNavLinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
