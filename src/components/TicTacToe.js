import React, { useEffect, useRef, useState } from 'react'
import Board from './Board'
import './styles.css'
import NavBar from './NavBar'

export const UserContext1 = React.createContext(1)
export const UserContext2 = React.createContext(2)

function TicTacToe() {
    const [inputShow, setInputShow] = useState(true)
    const [boardShow, setBoardShow] = useState(false)
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const enterGame = () => {
        setBoardShow(true)
        setInputShow(false)
        document.getElementById("name").style.display = "none"
    }

    return (
        <div>
            <NavBar />
            {
                inputShow ?
                    <div id="formdiv">
                        <form onSubmit={enterGame}>
                            <h1 className="gameName">TicTacToe</h1>
                            <h3 className='label'>Enter Player 1's Name</h3>
                            <input type="text" ref={inputRef} className="input" id = "input1" value={player1} onChange={e => setPlayer1(e.target.value)} required /><br />
                            <h3 className='label'>Enter Player 2's Name</h3>
                            <input type="text" className="input" value={player2} id = "input2" onChange={e => setPlayer2(e.target.value)} required /><br /><br />
                            <input type='submit' className='enterGameBtn' value="Enter Game" />
                        </form>
                        <input type="button" id="withoutnames" value="Start Without Names" onClick={enterGame} />

                    </div> : null
            }
            <h2 id="name">- By Mohammed Abdul Numaan Owais</h2>
            <UserContext1.Provider value={player1}>
                <UserContext2.Provider value={player2}>
                    {
                        boardShow ? <Board /> : null
                    }
                </UserContext2.Provider>
            </UserContext1.Provider>
        </div>
    )
}

export default TicTacToe