import React from 'react';
import data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: data,
        }
    }




    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollectionProps }) => 
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )}
            </div>
        )
    }
}


export default ShopPage;