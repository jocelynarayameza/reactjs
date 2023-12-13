const products = [{
    id: '1',
    name: 'Harry Potter',
    price: '30000',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/21130/capsule_616x353.jpg?t=1681924023',
    category: 'Playstation',
    description: 'This compilation unites the creative prowess of LEGO and the expansive world of Harry Potter, with an exciting journey full of spell-casting, potion-making, puzzle-solving, lessons, dueling and much more for players of all ages to enjoy.',
    stock: '20',},
    {id: '2', name: 'GTA', price: '40000', img: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1695060909', category: 'Xbox', description: 'GTA games are set in vast, predominantly urban "sandbox" environments, and feature protagonists involved in organized crime.', stock: '15'},
    {id: '3', name: 'Crash', price: '35000', img: 'https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png', category: 'Wii', description: 'Enter the vivid 3D world of Crash Bandicoot, a marsupial on a mission! His brain has been scrambled, his girlfriend is held captive, and his arch nemesis has a big N on his forehead!.',  stock: '30'},
]


export const getProducts = () => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 2000)
        
    })
}

export const getProductById = (productId) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))

        }, 2000)
        
    })
}

export const getProductsByCategory = (productCategory) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))

        }, 2000)
        
    })
}