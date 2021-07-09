const INITIAL_STATE = {
    sections: [
        {
            title: 'SEEDS & BULBS',
            imageUrl: 'https://image.flaticon.com/icons/png/512/834/834578.png',
            id: 1,
            linkUrl: 'seeds'
        },
        {
            title: 'FLOWERPOTS',
            imageUrl: 'https://image.flaticon.com/icons/png/512/2608/2608993.png',
            id: 2,
            linkUrl: 'flowerpots'
        },
        {
            title: 'TOOLS',
            imageUrl: 'https://image.flaticon.com/icons/png/512/2917/2917734.png',
            id: 3,
            linkUrl: 'tools'
        },
        {
            title: 'FURNITURES',
            imageUrl: 'https://image.flaticon.com/icons/png/512/1010/1010267.png',
            linkUrl: 'furnitures',
            id: 4
        },
        {
            title: 'LIGHTS',
            imageUrl: 'https://image.flaticon.com/icons/png/512/2010/2010797.png',
            id: 5,
            linkUrl: 'lights'
        },
        {
            title: 'FLOWERS DELIVERY',
            imageUrl: 'https://image.flaticon.com/icons/png/512/2203/2203124.png',
            linkUrl: 'delivery',
            id: 6
        }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default directoryReducer;