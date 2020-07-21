import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css'

//komponent publiczny - komponent, który może być używany przez wiele różnych komponentów

const ListWrapper = (props) => (
    <ul className="listWrapper__wrapper">
        {props.items.map((item) => (
            <ListItem
                key={item.name}
                {...item}
            />
        ))}
    </ul>
);


export default ListWrapper;