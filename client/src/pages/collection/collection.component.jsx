import React from "react";
import { selectShopCollectionsCategory } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionContainer,
  CollectionItemsContainer
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <h2>{title}</h2>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectShopCollectionsCategory(props.match.params.routeName)(state)
});

export default connect(mapStateToProps)(CollectionPage);
