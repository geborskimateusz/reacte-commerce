import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selector.js';

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
  })
  
  export default connect(mapStateToProps)(CollectionsOverview);
