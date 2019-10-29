import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import {
  selectShopIsFetching,
  selectShopCollectionsIsLoaded
} from "../../redux/shop/shop.selector";
import CollectionsOverviewContainer from "../../components/collections-overview/collections.overview.container";
import CollectionsPageContainer from "../../pages/collection/collection.container";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
console.warn("mounting")
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:routeName`}
          component={CollectionsPageContainer}
        />
        )} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
