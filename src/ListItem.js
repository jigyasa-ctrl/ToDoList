import React from 'react';
import './ListItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItem(props) {
    const items = props.items;
    const ListItems = items.map(item => {
        
       return <div className='list' key={item.key}>
            <p>{item.text}
            <span>
            <FontAwesomeIcon className='faicons' icon='trash' onClick={ () => props.deleteItem(item.key)} />
            </span>

            </p>
        </div>
        })
    return (
        <div>
            <FlipMove duration={300} easing='ease-in-out'>{ListItems}</FlipMove>
            
        </div>
    )
}

export default ListItem
