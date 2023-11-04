function 
customRender(reactElement,container)
{
// const domElement = document.createElement(reactElement.type)
// // domElement = document.createElement('a') 
// // it will create <a></a> behind the scence
// domElement.innerHTML = reactElement.children
// // a childeren is added 'children: 'click me to visit google' is added
// domElement.setAttribute('href',reactElement.props.href)
// // href is set with the value 'https://google.com'
// domElement.setAttribute('target',reactElement.props.target)
// // target is set with the value 'https://google.com'
// container.appendChild(domElement)
const domElement =  document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer =  document.querySelector('#root')

customRender(reactElement,maincontainer)
    {/* below written tag is being created and executed
 <a href = "https://google.com"/>click me to visit google</a> */}