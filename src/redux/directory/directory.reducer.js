const INITIAL_STATE = {
    sections: [
        {
            title: 'SEEDS & BULBS',
            imageUrl: 'https://thumbnails.production.thenounproject.com/VzUIxnIjSb3Rv1BQRvZ5segNXL4=/fit-in/1000x1000/photos.production.thenounproject.com/photos/6B0F0A88-5B1A-4628-AD7B-CE8B1FEC1E19.jpg',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'FLOWERPOTS',
            imageUrl: 'https://thumbnails.production.thenounproject.com/MLbto0Lj4kHihhWQOmPQcLRzXPk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/0E3A598B-4526-4E49-B681-CCB8B387F6B0.jpg',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'TOOLS',
            imageUrl: 'https://thumbnails.production.thenounproject.com/ZA3v_Cgj8U5d4JZFrEq4dPfDshE=/fit-in/1000x1000/photos.production.thenounproject.com/photos/527D7178-4A37-4F47-B49F-5BBFBA1F981E.jpg',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'FURNITURES',
            imageUrl: 'https://thumbnails.production.thenounproject.com/LIH8cEw-uv8lSIrb-dm2qO07tV8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/884D502C-1749-43EE-8F07-3D5B92C052D3.jpg',
            linkUrl: '',
            id: 4
        },
        {
            title: 'LIGHTS',
            imageUrl: 'https://thumbnails.production.thenounproject.com/RzTPkX9aYIJzvOt2QiT32_1d7As=/fit-in/1000x1000/photos.production.thenounproject.com/photos/CEC2454C-AE1F-4747-A8E4-3CCCD89CA16A.jpg',
            id: 5,
            linkUrl: ''
        },
        {
            title: 'FLOWERS DELIVERY',
            imageUrl: 'https://thumbnails.production.thenounproject.com/2Mp15Zm510SZTAukmFhf5PKCsoo=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0CA7BBD-3E7D-4B29-87A1-E703980D5EB7.jpg',
            linkUrl: '',
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