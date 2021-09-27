import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';

import './BoxList.css'

const BoxList = (props) => {
  const initialState = [];

  const [boxes, setBoxes] = useState(initialState);

  const addBox = (newBox) => {
    const newItem = {...newBox, id: uuid()};
    setBoxes([...boxes, newItem]);
  }

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <h2 className="BoxList-title">Box Generator</h2>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-boxes">
        {boxes.map(box => 
          <Box 
            key={box.id} 
            color={box.color} 
            width={box.width} 
            height={box.height}
            removeBox={() => removeBox(box.id)}
          />)}
        </div>
    </div>
  )
}

export default BoxList;