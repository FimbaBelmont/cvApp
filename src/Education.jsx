import { useState } from "react";
const generalData = [
	{
		label: "School Name",
		id: 0,
		value: "",
	},
	{
		label: "Degree / Field of Study",
		id: 1,
		value: "",
	},
	{ label: "Start Date", id: 2, value: "" },
	{ label: "End Date", id: 3, value: "" },
];

export default function Education() {
	const [data, setData] = useState(generalData);
	const [doneS, setDone] = useState(false);

	function Confirm() {
		setDone(!doneS);
	}
    

	function handleChange(itemId, e) {
		setData(
			data.map((item) => {
				if (item.id === itemId) {
					return { ...item, value: e.target.value };
				} else {
					return item;
				}
			})
		);
	}

	if (!doneS) {
		return (
			<>
				{data.map((item) => (
					<div key={item.id}>
						<label>{item.label}</label>
                        {item.id>1 ? <input type="date" value={item.value} onChange={(e) => handleChange(item.id, e)} /> : <input
							value={item.value}
							onChange={(e) => handleChange(item.id, e)}
						/>}
						
					</div>
				))}
				<button onClick={Confirm}>Done</button>
			</>
		);
	} else {
		return (
			<>
				{data.map((item) => (
					<div key={item.id}>
						<label>{item.label} :</label>
						{item.value}
					</div>
				))}
				<button onClick={Confirm}>Done</button>
                {/* <button onClick={Add}>Add</button> */}
			</>
		);
	}
}
