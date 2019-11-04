import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShopIsFetching,
  selectShopCollectionsIsLoaded
} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { compose } from "redux";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectShopCollectionsIsLoaded(state)
  });
  
  const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionPage);
  
  export default CollectionsPageContainer;