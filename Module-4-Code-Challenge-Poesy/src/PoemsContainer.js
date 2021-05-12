import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.prop.map(singlePoem => {return <Poem key={singlePoem.id} singlePoem={singlePoem}/>})
        }
      </div>
    );
  }
}

export default PoemsContainer;
