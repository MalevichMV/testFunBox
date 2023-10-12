import './ProductsSection.scss';
import Product from '../product/Product';

import data from '../../data.json'

function ProductsSection() {
    const renderProducts = () => {
      const products = data.products
      const items = products.map((item) => {
        return (
          <Product key={item.id} {...item}/>
        )
    })

    return (
      <div className='product-list'>
        {items}
      </div>
    )
  }
  
  return (
    <section className='products-section'>
      <h1 className='title'>Ты сегодня покормил кота?</h1>
      {renderProducts()}
    </section>
  )
}

export default ProductsSection;