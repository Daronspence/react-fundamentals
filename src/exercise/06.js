// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [input, updateInput] = React.useState('');

  return (
    <form onSubmit={() => onSubmitUsername(inputRef.current.value)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" ref={inputRef} type="text" value={input} onChange={e => updateInput(e.target.value.toLowerCase())} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
