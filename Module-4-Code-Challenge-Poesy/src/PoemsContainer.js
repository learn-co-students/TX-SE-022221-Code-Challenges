import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
         this.props.poems.map(poem => <Poem key={poem.id} poem={poem} handleFavorites={this.props.handleFavorites}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
