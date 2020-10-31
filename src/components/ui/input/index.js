import React from "react";

const Input = ({value, onChange, onKeyPress}) => {
  return (
    <div className="input-wrapper">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    </div>
  )
}

export default Input;