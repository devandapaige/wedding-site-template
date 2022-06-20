import React from "react";

const navigation = [{
    name: '',
    link: '',
    highlight: false
},
{
    name: '',
    link: '',
    highlight: false
},
{
    name: '',
    link: '',
    highlight: false
},
]

function Header(props) {
    return (
        <header>
            <ul>
                {navigation.map((x) => 
                    highlight ? <li style={{border: '2px solid white'}}><a href={x.link}>{x.name}</a></li> :
                    <li><a href={x.link}>{x.name}</a></li>
                )}
            </ul>
        </header>
    )
}

export default Header;