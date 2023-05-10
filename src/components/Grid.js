import React from 'react'

function Grid({ value, onGridClick }) {
    return (
        <div>
            <button className='tictactoegrid' onClick={onGridClick}>{value}</button>
        </div>
    )
}
export default Grid