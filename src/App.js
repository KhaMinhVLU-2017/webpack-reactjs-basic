import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <p>Welcome to React with webpack</p>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))