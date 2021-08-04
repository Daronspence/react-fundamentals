// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, color, children}) => {
  return (
    <div className={`box box--${size}`} style={{backgroundColor: color}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" color="lightblue">
        small lightblue box
      </Box>
      <Box size="medium" color="pink">
        medium pink box
      </Box>
      <Box size="large" color="orange">
        large orange box
      </Box>
    </div>
  )
}

export default App
