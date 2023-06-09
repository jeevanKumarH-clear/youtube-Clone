import React from 'react';
import SideBar from '../SideBar';

const Library = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Library</div>
	</div>;

export default Library;
