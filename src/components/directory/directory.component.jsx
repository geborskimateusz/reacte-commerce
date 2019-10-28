import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {DirectoryMenu} from './directory.styles';

const Directory = ({sections}) => (
      <DirectoryMenu>
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </DirectoryMenu>
    );


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
