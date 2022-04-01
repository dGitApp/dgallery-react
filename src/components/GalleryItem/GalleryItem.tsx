import React from 'react';
import { NftGalleryProps } from '../../NftGallery';
import { OpenseaAsset } from '../../types/OpenseaAsset';
import { getAssetTitle, joinClassNames } from '../../utils';
import { Lightbox } from '../Lightbox/Lightbox';
import { TradingModal } from '../TradingModal/TradingModal';
import { providers } from "ethers";


import './gallery-item.css';

const ExternalLink: React.FC<{ href: string }> = ({ href, children }) => (
  <a
    className="rnftg-no-underline rnftg-text-black rnftg-text-gray-200"
    href={href}
    target="_blank"
    rel="noopener"
  >
    {children}
  </a>
);

export interface GalleryItemProps {
  asset: OpenseaAsset;
  index: number;
  WalletProvider: providers.Web3Provider;
  metadataIsVisible: NftGalleryProps['metadataIsVisible'];
  hasTransferMode: NftGalleryProps['hasTransferMode']
  hasLightbox: NftGalleryProps['hasLightbox'];
  setLightboxIndex: (nextIndex: number) => void;
  increaseLightboxIndex: () => void;
  decreaseLightboxIndex: () => void;
  hasExternalLinks: NftGalleryProps['hasExternalLinks'];
  itemContainerStyle: NftGalleryProps['itemContainerStyle'];
  imgContainerStyle: NftGalleryProps['imgContainerStyle'];
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  asset,
  index,
  WalletProvider,
  metadataIsVisible,
  hasTransferMode,
  hasLightbox,
  setLightboxIndex,
  increaseLightboxIndex,
  decreaseLightboxIndex,
  hasExternalLinks,
  itemContainerStyle,
  imgContainerStyle,
}) => {
  const assetTitle = getAssetTitle(asset);

  const renderAssetMedia = () => {
    // No media present -> render the name/tokenId as a placeholder.
    if (!asset.image_preview_url) {
      return (
        <div
          className={joinClassNames(
            'rnftg-flex rnftg-flex-col rnftg-justify-center rnftg-items-center rnftg-w-full rnftg-h-full rnftg-cursor-pointer',
            'rnftg-break-words rnftg-truncate rnftg-text-lg rnftg-font-semibold dark:rnftg-text-gray-200'
          )}
        >
          {assetTitle}
        </div>
      );
    }

    const assetMediaExt = asset.image_preview_url.split('.').pop();
    if (assetMediaExt === 'mp4') {
      return (
        <video
          className={joinClassNames(
            'rnftg-w-full rnftg-h-full rnftg-object-cover rnftg-cursor-pointer rnftg-rounded-2xl'
          )}
          src={asset.image_preview_url}
          preload="auto"
          controlsList="nodownload"
          autoPlay
          loop
          playsInline
        ></video>
      );
    }

    return (
        <img
          className={joinClassNames(
            'rnftg-w-full rnftg-h-full rnftg-object-cover rnftg-cursor-pointer rnftg-rounded-2xl'
          )}
          src={asset.image_preview_url}
          alt={asset.name}
          loading="lazy"
        />
    );
  };

  return (
    <article
      style={itemContainerStyle}
      className="rnftg-item"
    >
        {metadataIsVisible && asset.collection.image_url &&  (
            <img
                src={asset.collection.image_url}
                alt={asset.collection.name}
                className="rnftg-item-collection-logo rnftg-w-16 rnftg-h-16 rnftg-rounded-full rnftg-flex rnftg-justify-center rnftg-items-center"
            />
          )
        }

      <div style = {imgContainerStyle} className='rnftg-item__img-wrapper'>
         <a
            className="rnftg-no-underline rnftg-text-black dark:rnftg-text-gray-200"
            onClick={() => setLightboxIndex(index)}
            href={`#lightbox-${index}`}
          >
           {renderAssetMedia()}
          </a>

      </div>

      {metadataIsVisible && 
          <div className='rnftg-item-title rnftg-break-words rnftg-truncate rnftg-text-lg rnftg-font-semibold rnftg-text-gray-200'> 
            {hasExternalLinks ? (
              <ExternalLink href={asset.permalink}>{assetTitle}</ExternalLink>
              ) : (assetTitle)
            }
          </div>
        }
      
      {hasLightbox && hasTransferMode === false && (
        <Lightbox
          index={index}
          asset={asset}
          increaseLightboxIndex={increaseLightboxIndex}
          decreaseLightboxIndex={decreaseLightboxIndex}
        />
      )}

      {hasTransferMode && (
        <TradingModal
          index={index}
          asset={asset}
          provider = {WalletProvider}
        />
      )}
    </article>
  );
};
