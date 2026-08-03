import styles from './page.module.css'

const products =[
    {
        category: 'smartphones',
    image:
      'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop',
    alt: 'iPhone 15 Pro Max',
    title: 'iPhone 15 Pro Max 256GB',
    price: 'R$ 8.999,00',
    description:
      'O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.8',
    count: '1.234',
    },

    {
        category: 'smartphones',
    image:
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop',
    alt: 'Samsung Galaxy S24 Ultra',
    title: 'Samsung Galaxy S24 Ultra 256GB',
    price: 'R$ 7.499,00',
    description:
      'Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.7',
    count: '987',
    },

    {
        category: 'laptops',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
    alt: 'MacBook Pro 14" M3 Pro 18GB',
    title: 'MacBook Pro 14" M3 Pro 18GB',
    price: 'R$ 15.999,00',
    description:
      'Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.9',
    count: '2.156',
    },
    
    {
        category: 'laptops',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
    alt: 'Dell XPS 13 Intel i7 16GB SSD 512GB',
    title: 'Dell XPS 13 Intel i7 16GB SSD 512GB',
    price: 'R$ 6.999,00',
    description:
      'Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.6',
    count: '543',
    },

    {
    category: 'tablets',
    alt: 'Samsung Galaxy Tab S9+ 256GB',
    title: 'Samsung Galaxy Tab S9+ 256GB',
    price: 'R$ 4.999,00',
    description:
      'Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.5',
    count: '432',
    },

    {
    category: 'tablets',
    alt: 'iPad Pro 12.9" M2 WiFi 128GB',
    title: 'iPad Pro 12.9" M2 WiFi 128GB',
    price: 'R$ 7.299,00',
    description:
      'O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.8',
    count: '1.876',
    },

    {
    category: 'acessórios',
    alt: 'Apple AirPods Pro 2ª Geração',
    title: 'Apple AirPods Pro 2ª Geração',
    price: 'R$ 2.399,00',
    description:
      'Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.7',
    count: '3.421',
    },

    {
    category: 'acessórios',
    alt: 'Apple Watch Series 9 GPS 45mm',
    title: 'Apple Watch Series 9 GPS 45mm',
    price: 'R$ 4.299,00',
    description:
      'Smartwatch mais avançado com chip S9, Double Tap, monitoramento de saúde completo.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.6',
    count: '2.187',
    },

    {
    category: 'acessorios',
    placeholder: '🔌 Carregador',
    title: 'Carregador Sem Fio MagSafe 15W',
    price: 'R$ 399,00',
    description:
      'Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.4',
    count: '876',
  },

  {
    category: 'smartphones',
    placeholder: '📱 Xiaomi',
    title: 'Xiaomi 13 Pro 256GB Leica',
    price: 'R$ 3.999,00',
    description:
      'Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e tela AMOLED.',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '4.5',
    count: '654',
  },
]

export default function Home() {
    const totalProducts = products.length;

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1> Loja de Eletrônicos </h1>
                <p>Os melhores produtos com os melhores preços!</p>
                <p>Total de produtos: {' '}</p>
                <span className={styles.totalProducts}>{totalProducts}</span>
                </header>

                <section className={styles.products}>
                  {products.map((product, index,) => (
                    <article
                    key={index}
                    className={styles.productCard}
                    data-category={product.category}
          >
            <div className={styles.productImage}>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.alt}
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>{product.placeholder}</div>
              )}
            </div>

            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productPrice}>{product.price}</div>
            <div className={styles.productDescription}>
              {product.description}
            </div>
            <div className={styles.productRating}>
              <span className={styles.stars}>{product.rating}</span>{' '}
              <span>({product.reviews}) - {product.count} avaliações</span>
            </div>
            </article>
                  ))}
                </section>
        </main>
    )
  };