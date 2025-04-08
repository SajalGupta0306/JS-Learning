import React from 'react'
import {useState} from 'react'

function NestedCheckBox({data, checked, setChecked}) {
  const [expand, setExpand] = useState(true)

  const onHandleChange = (isChecked, data) => {
    setChecked((prev) => {
      const newState = {...prev, [data.id]: isChecked}
      const checkChildren = (data) => {
        data.children?.forEach((child) => {
          newState[child.id] = isChecked
          child.children.length > 0 && checkChildren(child)
        })
      }
      checkChildren(data)
      return newState
    })
  }

  const comp = (
    <>
      <input
        type="checkbox"
        checked={checked[data.id] || false}
        onChange={(e) => onHandleChange(e.target.checked, data)}
      />
      <span style={{cursor: 'pointer'}} onClick={() => setExpand(!expand)}>
        {data.name}
      </span>
      {expand &&
        data.children.length > 0 &&
        data.children.map((item) => {
          return (
            <NestedCheckBox
              key={item.id}
              data={item}
              checked={checked}
              setChecked={setChecked}
            />
          )
        })}
    </>
  )

  return <div style={{textAlign: 'left', marginLeft: '10px'}}>{comp}</div>
}

export default NestedCheckBox
