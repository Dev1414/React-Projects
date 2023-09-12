import React,{useRef, useEffect, useState} from 'react'
import Title from '../components/Title'
import { ProgressBar } from '../components/ProgressBar';

export default function ProgressBars() {

    const [completed, setCompleted] = useState(51);
    const [status, setStatus] = useState({
        ui: 33,
        ux: 84,
        data: 10
    });

    const projectData = [
        {bgColor:'purple', completed: status.ui },
        {bgColor:'blue', completed: status.ux },
        {bgColor:'red', completed: status.data }
    ]

    const inputStyle = {
        width: 50,
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        borderBottom: '1px solid lightgray'
    };

    const uiInput = useRef(null);

    useEffect(() => {
        uiInput.current.focus()
        setInterval(() => {
            setCompleted(Math.floor(Math.random() * 100) + 1);
        }, 3000)
    }, [])

    return (
        <div className='container container-sm mx-auto text-center'>
            <Title text={'Progress bars'} />
            <h2>Project status</h2>

            <ul>
                <li>
                    UI status: 
                    <input 
                    type="number" 
                    style={inputStyle}
                    ref={uiInput}
                    value={status.ui}
                    onChange={(e) => setStatus({...status, ui: e.target.value})}
                    />
                </li>
                <li>
                    UX status: 
                    <input 
                    type="number" 
                    style={inputStyle}
                    value={status.ux}
                    onChange={(e) => setStatus({...status, ux: e.target.value})}
                    />
                </li>
                <li>
                    Data status: 
                    <input 
                    type="number" 
                    style={inputStyle}
                    value={status.data}
                    onChange={(e) => setStatus({...status, data: e.target.value})}
                    />
                </li>
            </ul>
            {projectData.map((data, idx) => (
                <ProgressBar key={idx} bgColor={data.bgColor} completed={data.completed}/>
            ))}

                <ProgressBar bgColor={completed > 50 ? 'orange' : 'green' } completed={completed}/>
        </div>
    )
}
