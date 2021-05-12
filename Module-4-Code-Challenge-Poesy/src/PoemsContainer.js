import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.allPoems.map(data => <Poem key={data.id} singlePoem={data}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
