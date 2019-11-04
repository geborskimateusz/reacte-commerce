import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selector.js';
import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
  })
  
  export default connect(mapStateToProps)(CollectionsOverview);
