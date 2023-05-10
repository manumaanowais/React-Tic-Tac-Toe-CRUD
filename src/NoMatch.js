import React from 'react'

export const NoMatch = () => {
    const styles = {
        color:"red"
    }
    return (
        <div style={styles}>
            <h1>404 ERROR!</h1>
            <h3>Page Not Found</h3>
        </div>
    )
}