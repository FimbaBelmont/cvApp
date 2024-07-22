import { useState } from "react";
const generalData = [
	{
		label: "First Name",
		id: 0,
		value: "",
	},
	{
		label: "Last Name",
		id: 1,
		value: "",
	},
	{ label: "Email", id: 2, value: "" },
	{ label: "Phone Number", id: 3, value: "" },
];

export default function General() {
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

	function Input({ itemId }) {
		if (itemId === 2) {
			return <input type="email" />;
		} else if (itemId === 3) {
			return <input type="tel" />;
		} else {
			return <input type="text" />;
		}
	}

	if (!doneS) {
		return (
			<>
				{data.map((item) => {
					return (
						<div key={item.id}>
							<label>{item.label}</label>
							<Input
								itemId={item.id}
								value={item.value}
								onChange={(e) => handleChange(item.id, e)}
                                require
							/>
						</div>
					);
				})}
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
			</>
		);
	}
}
