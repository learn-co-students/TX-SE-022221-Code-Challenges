import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          // render poems here
          // console.log(this.props.poems)
          this.props.poems.map((poem) => <Poem key={poem.id} poem={poem} deletePoem={this.props.deletePoem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
