import React, { useContext, useEffect, useState } from 'react'
import Grid from './Grid'
import './styles.css'
import { UserContext1, UserContext2 } from './TicTacToe'
import Swal from 'sweetalert2'

let counterX = 0;
let counterO = 0;
let counterDraw = 0;
function Board() {
    const player1 = useContext(UserContext1)
    const player2 = useContext(UserContext2)
    const [grid, setGrids] = useState(Array(9).fill(null))
    const [X, setX] = useState(true)
    useEffect(() => {
        if (player1 === '') {
            document.getElementById("player1").innerHTML = "Player 1 is X"
            document.getElementById("player2").innerHTML = "Player 2 is O"
            document.getElementById('counterx').innerHTML = 'Player 1 : '
            document.getElementById('countero').innerHTML = 'Player 2 : '
            document.getElementById('counterDraw').innerHTML = 'Draw : '
        } else {
            document.getElementById('counterx').innerHTML = player1 +' : '
            document.getElementById('countero').innerHTML = player2 +' : '
            document.getElementById('counterDraw').innerHTML = 'Draw : '
        }
    }, [player1,player2])
    const handleClick = (e, i) => {
        const nextGrid = grid.slice()
        if (X) {
            e.target.style.color = '#20b2aa'
            nextGrid[i] = 'X'
        } else {
            e.target.style.color = '#800000'
            nextGrid[i] = 'O'
        }
        setGrids(nextGrid)
        setX(!X)
        e.target.disabled = true
    }
    const winner = findWinner(grid)
    let result
    if (winner) {
        if (winner === 'X') {
            if (player1 === '') {
                result = `Player 1 won`
                document.getElementById('result').style.color = '#20b2aa'
                hideButtonsAfterWin()
                sweetAlertWinner()
            } else {
                result = `${player1} won`
                hideButtonsAfterWin()
                document.getElementById('result').style.color = '#20b2aa'
                sweetAlertWinner()
            }
            counterX++
            console.log("X :"+counterX)
        } else {
            if (player2 === '') {
                result = `Player 2 won`
                hideButtonsAfterWin()
                document.getElementById('result').style.color = '#800000'
                sweetAlertWinner()
            } else {
                result = `${player2} won`
                hideButtonsAfterWin()
                document.getElementById('result').style.color = '#800000'
                sweetAlertWinner()
            }
            counterO++
            console.log("O :"+counterO)
        }
    } else {
        if (player1 === '') {
            result = ` ${X ? 'Player 1' : 'Player 2'}'s Turn`
        } else {
            result = ` ${X ? player1 : player2}'s Turn`
        }
    }
    function hideButtonsAfterWin() {
        const buttons = document.getElementsByTagName("button");
        for (const button of buttons) {
            button.disabled = true;
        }
    }
    function findWinner(grid) {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < conditions.length; i++) {
            const [a, b, c] = conditions[i]
            if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) {
                return grid[a]
            }
        }
        if (grid[0] !== null && grid[1] !== null && grid[2] !== null && grid[3] !== null && grid[4] !== null && grid[5] !== null && grid[6] !== null && grid[7] !== null && grid[8] !== null) {
                counterDraw++
                Swal.fire({
                    title: 'Draw Match',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Start New Game',
                    denyButtonText: `Reset Board`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload()
                    } else if (result.isDenied) {
                        resetBoard()
                    }
                })
            }
        return null
    }
    function sweetAlertWinner() {
        Swal.fire({
            title: result,
            icon: 'success',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Start New Game',
            denyButtonText: `Reset Board`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload()
            } else if (result.isDenied) {
                resetBoard()
            }
        })
    }
    function resetBoard() {
        const buttons = document.getElementsByClassName('tictactoegrid');
        for (const button of buttons) {
            button.disabled = false;
            button.innerHTML = ''
        }
        for (let i = 0; i < grid.length; i++) {
            grid[i] = null;
        }
    }
    return (
        <>
        <div className='board'>
            <h1 className="gameName">TicTacToe</h1>
            <div className='rows'>
                <Grid value={grid[0]} onGridClick={(e) => handleClick(e, 0)} />
                <Grid value={grid[1]} onGridClick={(e) => handleClick(e, 1)} />
                <Grid value={grid[2]} onGridClick={(e) => handleClick(e, 2)} />
            </div>
            <div className='rows'>
                <Grid value={grid[3]} onGridClick={(e) => handleClick(e, 3)} />
                <Grid value={grid[4]} onGridClick={(e) => handleClick(e, 4)} />
                <Grid value={grid[5]} onGridClick={(e) => handleClick(e, 5)} />
            </div>
            <div className='rows'>
                <Grid value={grid[6]} onGridClick={(e) => handleClick(e, 6)} />
                <Grid value={grid[7]} onGridClick={(e) => handleClick(e, 7)} />
                <Grid value={grid[8]} onGridClick={(e) => handleClick(e, 8)} />
            </div>
            <h3 id="player1">{player1} is X</h3>
            <h3 id="player2">{player2} is O</h3>
            <h1 id="result">{result}</h1>
            <div className='scoreBoard'>
                <h2>Score Board :</h2>
                <h3>Total Matches Played : {counterX+counterO+counterDraw}</h3>
                <h4><span id="counterx"></span>{counterX}</h4>
                <h4><span id="countero"></span>{counterO}</h4>
                <h4><span id="counterDraw"></span>{counterDraw}</h4>
            </div>
            <input type="button" className='enterGameBtn' value="Reset Board" onClick={resetBoard} /><br /><br />
        </div>
        </>
    )
}
export default Board