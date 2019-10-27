import React from "react";
import "./collection.styles.scss";
import { selectShopCollectionsCategory } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection">
      <h2 className="collection__title">{title}</h2>
      <div className='collection__items'>
        {
          items.map(item => (<CollectionItem key={item.id} item={item}/>))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectShopCollectionsCategory(props.match.params.routeName)(
    state
  )
});

export default connect(mapStateToProps)(CollectionPage);
