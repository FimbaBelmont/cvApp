import { useState } from 'react'
import './App.css'
import Education from './Education'
import Work from './Work'


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
    </>
)

}
 
//RENDER EDUCATION AND WORK EXPREINCE HERE AND ADD THE "ADD MORE BUTTON UNDER THEM"

export default App
