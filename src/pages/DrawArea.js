import React from "react";
import styled from 'styled-components'; // import PropTypes from 'prop-types';
import Immutable from "immutable";
import Color from '../Components/Color.js';
import Colors from '../constants/Colors.js';
import Brush from '../Components/Brush.js';

const StyledDrawArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 100px 200px;
  background: white;
`
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`
const StyledPath = styled.path`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: ${props => props.strokeWidth };
  stroke-linejoin: round;
  stroke-linecap: round;
`
const ColorContainer = styled.div`
  position: fixed;
  bottom: 25px;
  display: flex;
  left: 125px;
  right: 125px;
`
const StyledHeading = styled.h2`
  margin: 30px 125px;
  font-size: 2rem;
`
const ToolContainer = styled.div`
  position: fixed;
  width: 170px;
  top: 30%;
`

class DrawArea extends React.Component {
  constructor() {
    super();
    this.state = {
      lines: new Immutable.List(),
      isDrawing: false,
      color: "red",
      stroke: "3px"
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setStroke = this.setStroke.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  } 
  handleMouseDown(mouseEvent) {
    if (mouseEvent.button !== 0) {
      return;
    } 
    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true
    }));
  }

  handleMouseMove(mouseEvent) {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    }));
  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  }

  setColor(newColor) {
    this.setState({
      color: newColor
    });
  }

  setStroke(newStroke) {
    console.log(newStroke);
    this.setState({
      stroke: newStroke
    });
  }

  render() {
    let colorList = Colors["color"];
    return (
      <div>
        <StyledHeading>Draw how you are feeling</StyledHeading>
        <ToolContainer>
          <Brush stroke="3px" handleClick={this.setStroke} src={require('../static/images/drawing/colored-pencil.png')} />
          <Brush stroke="5px"  handleClick={this.setStroke} src={require('../static/images/drawing/smaller-brush.png')} />
          <Brush stroke="8px" handleClick={this.setStroke} src={require('../static/images/drawing/larger-painbrush.png')} />
        </ToolContainer>
        <StyledDrawArea
          ref="drawArea"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        >
          <Drawing color={this.state.color} strokeWidth={this.state.stroke} lines={this.state.lines} />
        </StyledDrawArea>
        <ColorContainer>
          {colorList.map((color, i) => {
            return(
              <Color key={i} handleClick={this.setColor} color={color} />
            )
          })}
        </ColorContainer>
      </div>
    );
  }
}

function Drawing({ color, lines, strokeWidth}) {
  return (
    <StyledSVG className="drawing">
      {lines.map((line, index) => (
        <DrawingLine strokeWidth={strokeWidth} color={color} key={index} line={line} />
      ))}
    </StyledSVG>
  );
}

function DrawingLine({ color, line, strokeWidth}) {
  const pathData = "M " +
    line
    .map(p => {
      return `${p.get('x')} ${p.get('y')}`;
    })
    .join(" L ");

  return <StyledPath strokeWidth={strokeWidth} color={color} className="path" d={pathData} />;
}

export default(DrawArea);


