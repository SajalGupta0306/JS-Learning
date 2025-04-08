// nested checkbox
// nested
// checkbox


import NestedCheckBox from './NestedCheckBox'
import React from 'react'
import {useState} from 'react'

const data = [
  {
    id: 1,
    name: 'public',
    children: [
      {
        id: 4,
        name: 'Component',
        children: [
          {
            id: 9,
            name: 'index.html',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'src',
    children: [
      {
        id: 5,
        name: 'App.js',
        children: [],
      },
      {
        id: 6,
        name: 'Component.js',
        children: [],
      },
      {
        id: 7,
        name: 'index.js',
        children: [],
      },
      {
        id: 8,
        name: 'styles.css',
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: 'package.json',
    children: [],
  },
]

function App() {
  const [checked, setChecked] = useState({})
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <NestedCheckBox
            key={item.id}
            data={item}
            checked={checked}
            setChecked={setChecked}
          />
        )
      })}
    </div>
  )
}

export default App
