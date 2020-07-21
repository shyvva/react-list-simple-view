import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form'

const initialStateItems = [
    {
        image: 'https://boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]
class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);
        console.log(event.target[3].value);
    }

    render() {
        return (
            <div>
                <ListWrapper
                    items={this.state.items} />
                    <Form submitFn={this.addItem} />
            </div>
        )
    }
}

export default App;
