import ProductCard from '../component/ProductCard'

const Product = () => {
  const products = [
    { id: 0, name: 'Organic Pesticides', price: '₹299' },
    { id: 1, name: 'Insect Traps', price: '₹1200' },
    { id: 2, name: 'Vegetable Seeds', price: '₹149' },
    { id: 3, name: 'Insect Traps', price: '₹789' },
    { id: 4, name: 'Chemical Fertilizers', price: '₹645' },
    { id: 5, name: 'Flower Seeds', price: '₹299' },
  ]

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-8 m-2'>
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
