import React from 'react'
import {useState} from 'react'

function NestedCheckBox({data, checked, setChecked, fullData}) {
  const [expand, setExpand] = useState(true)

  const onHandleChange = (isChecked, data) => {
    setChecked((prev) => {
      const newState = {...prev, [data.id]: isChecked}
      const checkChildren = (data) => {
        data.children.length > 0 &&
          data.children?.forEach((child) => {
            newState[child.id] = isChecked
            child.children.length > 0 && checkChildren(child)
          })
      }
      checkChildren(data)

      const updateCHeckbox = (data) => {
        if (!data.children.length > 0) {
          return newState[data.id] || false
        }
        const allChildrenChecked = data.children.every((child) => {
          return updateCHeckbox(child)
        })
        newState[data.id] = allChildrenChecked
        return allChildrenChecked
      }

      fullData.forEach((val) => updateCHeckbox(val))
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
              fullData={fullData}
            />
          )
        })}
    </>
  )

  return <div style={{textAlign: 'left', marginLeft: '10px'}}>{comp}</div>
}

export default NestedCheckBox
