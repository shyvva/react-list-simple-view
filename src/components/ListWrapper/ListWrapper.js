import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css'
import { twitterAccounts } from '../../data/twitterAccounts';

//komponent publiczny - komponent, który może być używany przez wiele różnych komponentów

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map((item) => (
            <ListItem
                key={item.name}
                {...item}
            />
        ))}
    </ul>
);


export default ListWrapper;