import React from 'react'
import AchievementSelector from '../Selectors/AchievementSelector'
function AchievementList({list}) {

  return (
    <div>
           {list.map((item, index) => (
    <div key={index} style={{   width: '10%', height: '10%',  marginTop: '2%', marginBottom:'4%', marginLeft:'4%', flexShrink: 0 }}>
    {item ? (
    <span style={{textDecoration: 'line-through'}}>{AchievementSelector(index)}</span>
) : (
    <span>{AchievementSelector(index)}</span>
)}
              </div>
          ))}
    </div>
  )
}

export default AchievementList