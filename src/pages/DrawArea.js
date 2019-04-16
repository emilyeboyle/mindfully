import React from "react";
import styled from 'styled-components'; // import PropTypes from 'prop-types';
import Immutable from "immutable";
import Color from '../Components/Color.js';
import Colors from '../constants/Colors.js';
import Brush from '../Components/Brush.js';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import { NavLink } from 'react-navi';
import ReactTimeout from 'react-timeout';

const StyledDrawArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 100px 200px;
  background: white;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  position: fixed;
  bottom: -25px;
  right: 300px;
`
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
  cursor: pointer;
`
const StyledPath = styled.path`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: ${props => props.strokeWidth };
  stroke-linejoin: round;
  stroke-linecap: round;
  cursor: pointer;
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
      stroke: "3px",
      showModal: true,
      modalText: "intro"
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setStroke = this.setStroke.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.warning = this.warning.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup touchend", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup touchend", this.handleMouseUp);
  }

  modalClose() {
    this.setState({showModal: false});
    if (this.state.modalText === "intro") {
      this.setWarnTimeout();
    } else if (this.state.modalText === "warn") {
      this.setRedirectTimeout();
    }
  }

  setWarnTimeout() {
    const warningTime = (1000 * 60 * 2);
    this.warnTimeout = this.props.setTimeout(this.warning, warningTime);
  };

  setRedirectTimeout() {
    const redirectTime = (1000 * 60);
    this.redirectTimeout = this.props.setTimeout(this.redirect, redirectTime);
  }

  warning() {
    this.setState({
      modalText: "warn",
      showModal: true
    });
  }

  redirect() {
    window.location.assign("/thankYou");
  }

  handleMouseDown(mouseEvent) {
    const point = this.relativeCoordinatesForEvent(mouseEvent, this.state.color, this.state.stroke);

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true
    }),() => {
    });
    //}
  }

  handleMouseMove(mouseEvent) {
    if (this.state.isDrawing) {
      const point = this.relativeCoordinatesForEvent(mouseEvent, this.state.color, this.state.stroke);

      this.setState(prevState =>  ({
        lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
      }));
    }

  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent, color, stroke) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    if (mouseEvent.touches) {
      return new Immutable.Map({
        x: mouseEvent.touches[0].clientX - boundingRect.left,
        y: mouseEvent.touches[0].clientY - boundingRect.top,
        color: color,
        stroke: stroke,
      });
    } else { return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
        color: color,
        stroke: stroke,
    });
    }
  }

  setColor(newColor) {
    this.setState({
      color: newColor
    });
  }

  setStroke(newStroke) {
    this.setState({
      stroke: newStroke
    });
  }

  render() {
    let colorList = Colors["color"];
    let modalText;
    if (this.state.modalText === "intro") {
      modalText = "Spend the next 3 minutes on this drawing activity."
    } else if (this.state.modalText === "warn") {
      modalText = "You have one minute remaining."
    }
    return (
      <div>
        <StyledHeading>Draw how you are feeling</StyledHeading>
        <ToolContainer>
          <Brush selected={this.state.stroke} stroke="3px" handleClick={this.setStroke} src={require('../static/images/drawing/colored-pencil.png')} />
          <Brush selected={this.state.stroke} stroke="5px"  handleClick={this.setStroke} src={require('../static/images/drawing/smaller-brush.png')} />
          <Brush selected={this.state.stroke} stroke="8px" handleClick={this.setStroke} src={require('../static/images/drawing/larger-painbrush.png')} />
        </ToolContainer>
        <StyledDrawArea
          ref="drawArea"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onTouchStart={this.handleMouseDown}
          onTouchMove={this.handleMouseMove}
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
        <ButtonContainer>
          <NavLink href={`/thankYou`}>
            <Button text='Finish' emotion="brand" show={true}/>
          </NavLink>
        </ButtonContainer>
        <Modal
          open={this.state.showModal}
          handleClose={this.modalClose}
          text={modalText}
        />
      </div>
    );
  }
}

function Drawing({lines}) {
  return (
    <StyledSVG className="drawing">
      {lines.map((line, index) => (
        <DrawingLine  key={index} line={line} />
      ))}
    </StyledSVG>
  );
}

function DrawingLine({ line }) {
  const pathData = "M " +
    line
    .map(p => {
      return `${p.get('x')} ${p.get('y')}`;
    })
    .join(" L ");
  const colorData = line.get(0).get('color');
  const strokeData = line.get(0).get('stroke');

  return <StyledPath strokeWidth={strokeData} color={colorData} className="path" d={pathData} />;
}

export default ReactTimeout(DrawArea);
