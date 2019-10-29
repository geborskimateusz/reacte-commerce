import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { setCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { get } from "http";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;

    const collectionsRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      setCollections(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }



  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:routeName`} component={CollectionPage} />
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
