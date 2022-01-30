import React from 'react';
import './styles.css';
import ItemCount from '../ItemCount';

const ItemDetail = ({product, onAddCallback}) => {
    return (
        <div className='productDetail'>
            <img src={product.img} alt={product.name} />
            <div className='detalles'>
                <h2>{product.name}</h2>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <input name="descripcion" type="text" defaultValue={product.description}/>
                </div>
                <div>
                    <label htmlFor="material">Material:</label>
                    <input name="material" type="text" defaultValue={product.material}/>
                </div>
                <div>
                    <label htmlFor="tamaño">Tamaño:</label>
                    <input name="tamaño" type="text" defaultValue={product.size}/>
                </div>
                <div>
                    <label htmlFor="peso">Peso:</label>
                    <input name="peso" type="text" defaultValue={product.weight}/>
                </div>
                <div>
                    <label htmlFor="valor">Valor:</label>
                    <input name="valor" type="text" defaultValue={product.price}/>
                </div>

                <ItemCount stockInicial={15} cantidadInicial={1} onAddCallback={onAddCallback}/>
            </div>
        </div>
    )
}

export default ItemDetail;
