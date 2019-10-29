import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { setCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;

    const collectionsRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      setCollections(collectionsMap);
      this.setState({isLoading: false})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const {isLoading} = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/> } />
        <Route path={`${match.path}/:routeName`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/> } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCollections: collections => dispatch(setCollections(collections))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
