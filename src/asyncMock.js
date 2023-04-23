const products = [
    {
        id: '1',
        name: 'laberinto',
        price: 7200,
        category: 'didacticos',
        img: 'https://imgs.search.brave.com/WzvLrxwcZf5mVIIMHmCAKZuWt5JdmryFfvq4F-oQWWU/rs:fit:1001:1001:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxdHBsWGJlYUxM/LmpwZw',
        stock: 6,
        description: 'Laberinto didactico'
    },
    {
        id: '2',
        name: 'avion',
        price: 4200,
        category: 'madera',
        img: 'https://imgs.search.brave.com/mEFH8hcYrgUFqO9AVS1nzO1P8NZcin8PNF0KylYCOCQ/rs:fit:1200:1067:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1IemlHaWxnV1pK/NC9UcXNQQ0RoZVdV/SS9BQUFBQUFBQUFV/cy9IbnRpMGVFNTVY/MC9zMTYwMC9hdmlv/bitkZSttYWRlcmEu/anBn',
        stock: 8,
        description: 'Avion de madera' 
    },
    {
        id: '3',
        name: 'autito',
        price: 6000,
        category: 'arrastre',
        img: 'https://imgs.search.brave.com/vRq0xo8yrQqdxFogV9AqHvco8vavJRJn_q-8DypUqEA/rs:fit:938:1024:1/g:ce/aHR0cHM6Ly9qdWd1/ZXRlcmlhbWFnaWMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA2L01HMDAw/My05Mzh4MTAyNC5q/cGc',
        stock: 10,
        description: 'Autito de madera'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    }) 
}