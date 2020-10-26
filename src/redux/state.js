import React from 'react';

let state = {
    dialogsNamesData: [
        {id: 1, name: 'Nikita', avatar: 'https://avas.at.ua/_ph/45/1/469869713.jpg?1603712491'},
        {id: 2, name: 'Egor', avatar: 'https://avas.at.ua/_ph/45/1/563058985.jpg?1603712491'},
        {id: 3, name: 'Dima', avatar: 'https://avas.at.ua/_ph/45/1/940876170.jpg?1603712670'},
    ],

    messageDataBase: [
        {id: 1, sender: true, text: "Hello!"},
        {id: 2, sender: true, text: "How are you?"},
        {id: 3, sender: false, text: "I'll find you and hug!"},
        {id: 4, sender: true, text: "Oh, no!"},
        {id: 5, sender: false, text: "Time is running..."},
    ],

    postsDataBase: [
        {id: 0, text: 'Hello my friends!', like: 25},
        {id: 1, text: 'I learn react', like: 13},
        {id: 2, text: 'Far far away...', like: 20},
    ]
}

export default state;