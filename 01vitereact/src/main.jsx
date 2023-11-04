import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
function Myapp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
const anotherUser = 'Nouman Haider'
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement

) 
