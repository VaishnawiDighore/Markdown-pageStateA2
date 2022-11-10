import { useState } from 'react';

const MarkInputbox = ({getvalue}) => {
    const [passdata, setPassdata] = useState("");
    const value = e => {
        const value = e.target.value;
        setPassdata(value);
        getvalue(passdata);
    }

    return (
        <div className="input for">
            <br />
            <textarea  className="inputbox_textarea textarea"  onKeyUp={value} >{passdata}</textarea>         
        </div>
    )
}

export default MarkInputbox;