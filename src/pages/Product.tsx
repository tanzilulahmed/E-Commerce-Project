import ProductCard from '../component/ProductCard'

const Product = () => {
  const products = [
    { id: 0, name: 'Pesticides', price: '₹299' },
    { id: 1, name: 'Agri Tools', price: '₹500' },
    { id: 2, name: 'Fertilizer', price: '1299' }
  ]

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
