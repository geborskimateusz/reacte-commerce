import React from "react";
import "./directory.styles.scss";
import { DIRECTORY_SECTIONS } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [...DIRECTORY_SECTIONS]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
