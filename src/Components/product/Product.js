import './Product.scss';

import React from 'react';

function Product({ header, title, taste, weight, details, availability }) {
    const renderDetails = () => {
        const detailList = details
        const items = detailList.map((item, i) => {
            let str = item
            const number = str.match(/\d+/)
            str = number ? str.replace(number, '') : str
            return number ? <React.Fragment key={i}> <span> {number} </span> {str} <br/> </React.Fragment> : <React.Fragment key={i}> {str} <br/> </React.Fragment>
        })
        return items;
    }

    return (
        <div className='product'>
            <div className='product__border'>
                <div className='product__content'>
                    <p className='product__header'>{header}</p>
                    <h2 className='product__title'>{title}</h2>
                    <p className='product__taste'>{taste}</p>
                    <p className='product__details'>{renderDetails()}</p>
                    <div className='product__weight-container'>
                        <p className='product__weight-value'><span>{weight}</span> <br/> кг</p>
                    </div>
                    <img className='product__img' src={require('../../img/cat.png')} alt='CatImage' />
                </div>
            </div>
            <p className='product__subinfo'>Чего сидишь? Порадуй котэ, <span>купи.</span></p>
        </div>
    )
}

export default Product;