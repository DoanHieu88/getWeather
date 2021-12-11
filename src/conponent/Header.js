import {useState} from 'react'

export default function Header() {
    const [address, setAddress] = useState('')
    
    const takeInput = (e) =>{
        setAddress(e.target.value);
    }

    return (
        <div className='container-fluid'>
           <input className="form-control" placeholder='Search' style={{'padding': '10px'}} onChange={takeInput} value={address}></input>
        </div>  
    )
}
