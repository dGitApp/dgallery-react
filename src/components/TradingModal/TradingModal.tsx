import React, { useState } from 'react';
import './Trading-Modal.css'
import { OpenseaAsset } from '../../types/OpenseaAsset';

export interface TradingModalProps {
    asset: OpenseaAsset;
    index: number;
}

export const TradingModal: React.FC<TradingModalProps> = ({
    asset,
    index
}) => {
    const [price, setPrice] = useState('')

    return (
        <div
        id={`lightbox-${index}`}
        className="perfundo__overlay"
        onClick={() => {
          window.location.assign('#lightbox-untarget');
        }}
      >
        <figure
          className="perfundo__figure"
          onClick={(evt) => {
            // Prevents clicks on the image triggering `#lightbox-untarget`.
            evt.stopPropagation();
          }}
        >
              <div className="perfundo__figtitle"> Make Offer </div>
              <img className="perfundo__image" src={asset.image_url} loading="lazy" />
              <div className='perfundo__figcaption'> 
                <input  className='perfundo__inputbox' 
                        placeholder='Amount...'
                        value={price}
                        onChange={()=>{setPrice()}}
                />
                <button onClick={() => alert('send request')} className='perfundo__inputbox'> Send </button>
              </div>              
        </figure>
      </div>
    )
}