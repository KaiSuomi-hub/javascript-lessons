// import React from 'react';




function Task3() {



	const NamePrintOut = (props) => {
		let elementList = [];
		elementList.push // here we push to the previously made arr the prop namelist
			(props.namelist.map
				((name, index) =>
			(index % 2 === 0) ? <p><b>{name}</b></p> : <p><i>{name}</i></p>))

		return elementList;

	}

const Gg = () => {
	return (
		<p>This is task4 </p>
	)
}
const namelist = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"];
return (
	<div style={{
		backgroundColor: "#ddd",
		borderRadius : "5px",
	}} className="task3">

	<Gg/>
		<NamePrintOut namelist={namelist} />

  </div>
);
}

export default Task3;