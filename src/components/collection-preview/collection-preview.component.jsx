import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, PreviewContainer, CollectionTitle } from './collection-preview.styles';




const CollectionPreview = ({title, items, match}) => {
   
    
    return (
        <CollectionPreviewContainer>
            <CollectionTitle to={`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</CollectionTitle>
            <PreviewContainer>
                {items.filter((item, idx) => idx < 4).map((item) =>
                    
                    <CollectionItem key={item.id} item={item} />
                
                )}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )

}

export default CollectionPreview;