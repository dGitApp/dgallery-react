import React, { useState } from 'react';
import './Trading-Modal.css'
import { OpenseaAsset } from '../../types/OpenseaAsset';
import {MdSell} from 'react-icons/md'

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
                        type = 'number'
                        min = '0'
                        step= '0.01'
                        onChange={(e)=>{setPrice(e.target.value)}}
                />
                <MdSell size = {30} onClick={() => alert({price})}  style={{cursor:'pointer', margin: 5}}/>
              </div>              
        </figure>
      </div>
    )
}