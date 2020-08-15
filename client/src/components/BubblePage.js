import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddColor from './AddColor';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [depend, setDepend] = useState(false)

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        setColorList(res.data)
        setDepend(false)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [depend])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} setDepend={setDepend} /> 
      <AddColor colors={colorList} />
      <Bubbles colors={colorList} />
    </div>
  )
};

export default BubblePage;
