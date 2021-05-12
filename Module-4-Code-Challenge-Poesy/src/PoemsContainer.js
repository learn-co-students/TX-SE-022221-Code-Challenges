import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.allPoems.map(poem => <Poem key={poem.id} singlePoem={poem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
