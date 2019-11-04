import { DIRECTORY_SECTIONS } from "../../components/directory/directory.data";

const initialState = {
  sections: DIRECTORY_SECTIONS
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default directoryReducer;
