import React from "react";

const isValidPoem = poem =>{
  const poemLines = poem.split("\n").map(line => line.trim())
  const NumberofLines = poemLines.length === 3
  if (
    poem &&
    NumberofLines &&
    poemLines[0].split(" ").length === 5 &&
    poemLines[1].split(" ").length === 3 &&
    poemLines[2].split(" ").length === 5
  ){
    return true
  }
  else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handlePoem = event =>{
  const validity = isValidPoem(event.target.value)
  this.setState({
    poem: event.target.value,
    valid: validity
  })

}

  render() {
    return (
      <div>
        <textarea rows="3" cols="60"
        value= {this.state.poem}
        onChange={this.handlePoem}
         />
        { !this.state.valid ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null
      }
      </div>
    );
  }
}

export default PoemWriter;
