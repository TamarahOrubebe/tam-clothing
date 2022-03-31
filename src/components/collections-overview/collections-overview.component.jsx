import React from "react";
import './collections-overview.styles.scss';
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";


const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) =>
            <CollectionPreview key={id} {...otherCollectionProps} />
        )}

    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

