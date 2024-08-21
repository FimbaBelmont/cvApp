import { useState } from 'react';
import './App.css';
import Education from './Education';
import Work from './Work';
import General from './General';

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

const educData = [
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

  const workData = [
    {
      label: "Company Name",
      id: 0,
      value: "",
    },
    {
      label: "Position Title",
      id: 1,
      value: "",
    },
    { label: "Start Date", id: 2, value: "" },
    { label: "End Date", id: 3, value: "" },
    { label: "Location", id: 4, value: "" },
    { label: "Description", id: 5, value: "" },
  ];


function App() {
    const [edInfo, addEdInfo] = useState([Education]);
    const [edIds, addEdId] = useState([1]);
    const [edCounter, edCounterInc] = useState(2);
    const [workInfo, addWorkInfo] = useState([Work]);
    const [workIds, addWorkId] = useState([1]);
    const [workCounter, workCounterInc] = useState(2);



    function Add(){
        addEdInfo([...edInfo, Education]);
        edCounterInc(edCounter+1);
        addEdId([...edIds,edCounter]);
        console.log(edInfo);
    }

    function AddWork(){
        addWorkInfo([...workInfo, Work]);
        workCounterInc(workCounter+1);
        addWorkId([...workIds,workCounter]);
    }

    function Remove(id){
        let idx = edIds.findIndex((ele )=> ele === id);
        addEdInfo(edInfo.filter((item,idxx)=>{return idxx !== idx}));
        addEdId(edIds.filter((item,idxx)=>{return idxx !== idx}));
    }

    function RemoveWork(id){
        let idx = workIds.findIndex((ele )=> ele === id);
        addWorkInfo(workInfo.filter((item,idxx)=>{return idxx !== idx}));
        addWorkId(workIds.filter((item,idxx)=>{return idxx !== idx}));
    }


return (
    <>
    <div className="edit">
        <General generalData={generalData}/>
        <div className="EducationInfo">
            {edInfo.map((Item, index)=> <div id={edIds[index]} key={edIds[index]}>
                <Item />
                <button onClick={() => Remove(edIds[index])}>Remove</button>
            </div>)}
            <button onClick={Add}>Add Education Info</button>
        </div>
        <div className="WorkInfo">
        {workInfo.map((Item, index)=> <div id={workIds[index]} key={workIds[index]}>
            <Item />
            <button onClick={() => RemoveWork(workIds[index])}>Remove</button>
        </div>)}
        <button onClick={AddWork}>Add Work Info</button>
        </div>
    </div>
    </>
)

}

 

export default App
