import React from 'react';
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
    return (
        <div
        id={`lightbox-${index}`}
        className="perfundo__overlay"
        onClick={() => {
          window.location.assign('#lightbox-untarget');
        }}
      >
        <figure
          className="perfundo__content perfundo__figure"
          onClick={(evt) => {
            // Prevents clicks on the image triggering `#lightbox-untarget`.
            evt.stopPropagation();
          }}
        >
            <div className='trading-container'>
                <img className="perfundo__image" src={asset.image_url} loading="lazy" />
                <div className=''> price and send </div>
            </div>
        </figure>
      </div>
    )
}