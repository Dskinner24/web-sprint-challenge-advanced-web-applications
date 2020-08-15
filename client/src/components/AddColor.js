import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddColor = (props) => {
    const [color, setColor] = useState({
        color: "",
        code: { hex: "" }
    })

    const handleChanges = (e) => {
        setColor({...color, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        axiosWithAuth()
            .post('/colors', color)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
            
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Color</label>
                <input
                    type='text'
                    name='color'
                    placeholder='color'
                    value={color.color}
                    onChange={handleChanges}
                ></input>
                <label htmlFor='hex'>Hex Code</label>
                <input
                    type='text'
                    name='hex'
                    placeholder='hex code'
                    value={color.code.hex}
                    onChange={e => {
                        setColor({
                            ...color,
                            code: {hex: e.target.value}
                        })
                    }}
                ></input>
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default AddColor;