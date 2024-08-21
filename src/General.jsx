import { useState } from "react";

export default function General({generalData}) {
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
		console.log(data);
	}

	function Inputs( itemId ) {
		if (itemId === 2) {
			return "email" ;
		} else if (itemId === 3) {
			return "tel" ;
		} else {
			return "text";
		}
	}

	if (!doneS) {
		return (
			<>
				{data.map((item) => {
					return (
						<div key={item.id}>
							<label>{item.label}</label>
							<input
								type={Inputs(item.id)}
								itemId={item.id}
								id={"general"+item.id}
								value={item.value}
								onChange={(e) => handleChange(item.id, e)}
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
					<div key={item.id} >
						<label>{item.label} :</label>
						{item.value}
					</div>
				))}
				<button onClick={Confirm}>Done</button>
			</>
		);
	}
}
