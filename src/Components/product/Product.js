import './Product.scss';

import { useState, useEffect  } from 'react';
import React from 'react';

function Product({ header, title, taste, weight, details, description, availability }) {
    const [status, setStatus] = useState('default');
    const [headerText, setHeaderText] = useState(header);

    useEffect(() => {
       if (!availability) setStatus('disabled')        
    }, [])

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

    const onClick = () => {
        if (status === 'disabled') return;

        if (status === 'selected')
        {
            setStatus('default')
            setHeaderText(header)
        }
        else
        {
            setStatus('selected')
        } 
    }

    const onMouseEnter = () => {
        if (status === 'selected') setHeaderText('Котэ не одобряет?')
    }

    const onMouseLeave = () => {
        if (status === 'selected') 
            if (header !== headerText) 
                setHeaderText(header)
    }

    return (
        <div    className={`product
                        ${status === 'disabled' ? 'product_disabled' : ''}
                        ${status === 'selected' ? 'product_selected' : ''}`}>
            <div className='product__border' 
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <div className='product__content'>
                    <p className={`product__header ${headerText !== header ? 'product__header_hover' : ''}`}>{headerText}</p>
                    <h2 className='product__title'>{title}</h2>
                    <p className='product__taste'>{taste}</p>
                    <p className='product__details'>{renderDetails()}</p>
                    <div className='product__weight-container'>
                        <p className='product__weight-value'><span>{weight.toString().replace('.', ',')}</span> <br/> кг</p>
                    </div>
                    <img className='product__img' src={require('../../img/cat.png')} alt='CatImage' />
                </div>
            </div>
            {status === 'default' && <p className='product__subinfo'>Чего сидишь? Порадуй котэ, <span onClick={onClick}>купи.</span></p>}
            {status === 'disabled' && <p className='product__subinfo product__subinfo_sold-out'>Печалька, {taste} закончился.</p>}
            {status === 'selected' && <p className='product__subinfo'>{description}</p>}
        </div>
    )
}

export default Product;