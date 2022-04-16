import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import collectionsOverview from "./collections-overview.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import { compose } from "redux";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});



const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(collectionsOverview);

export default CollectionsOverviewContainer;