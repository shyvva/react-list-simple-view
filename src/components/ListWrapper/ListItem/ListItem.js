import React from 'react';
import './ListItem.css'
import PropTypes from 'prop-types';
//Komponent prywatny wykorzystywany tylko przez komponent nadrzędny ListWrapper

const ListItem = ({
    name,
    description,
    image,
    twitterLink
}) => (
        <li className="listItem__wrapper">
            <img
                src={image}
                className="listItem__image"
                alt={name} />
            <div>
                <h2 className="listItem__name">
                    {name}
                </h2>
                <p className="listItem__description">
                    {description}
                </p>
                <a href={twitterLink}
                    className="listItem__button">
                    visit twitter page</a>
            </div>
        </li>
    );

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    description : 'One of the React creators'
}

export default ListItem;