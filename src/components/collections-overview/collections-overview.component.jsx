import React from "react";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {CollectionOverviewContainer} from './collections-overview.styles';


const CollectionsOverview = ({collections, match}) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) =>
            <CollectionPreview match={match} key={id} {...otherCollectionProps} />
        )}

    </CollectionOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

