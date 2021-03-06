import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import $ from 'jquery';


//This is the symptom page where the patient will select what area of their body is bothering them
class Page_Symptom extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true,
      pregnant_question: false,
      selected_pain: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show
      });
    }
  }

  clickBack() {
    this.setState({
      enter: true
    });
    this.props.clickStep({
      step: 3
    });
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 6
    });
  }

  onGenderChange(e) {
    if (e.target.id === 'female') {
      this.setState(prevState => ({
        pregnant_question: true
      }));
    }
    else {
      this.setState(prevState => ({
        pregnant_question: false
      }));
    }
  }

  selectedPain(elem){
    var css = (this.state.selected_pain === "active") ? "" : "active";
    this.setState({
      selected_pain: css
    });
  }

  //all the toggle functions for the different body parts
  //NECK
  toggleNeck(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="block";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //HEAD
  toggleHead(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="block";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //CHEST
  toggleChest(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="block";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //ABS
  toggleAbs(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="block";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //SHOULDER
  toggleShoulder(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="block";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //GROIN
  toggleGroin(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="block";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //LEG
  toggleLeg(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="block";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //UPPER BACK
  toggleUpperBack(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="block";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";    
  }

  //LOWER BACK
  toggleLowerBack(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="block";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="none";  
  }

  //BACK OF HEAD
  toggleBackHead(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="block";
    document.getElementById('armStuff').style.display="none";  
  }

  //ARMS
  toggleArms(elem){
    elem.preventDefault();
    document.getElementById('headStuff').style.display="none";
    document.getElementById('neckStuff').style.display="none";
    document.getElementById('chestStuff').style.display="none";
    document.getElementById('absStuff').style.display="none";
    document.getElementById('shoulderStuff').style.display="none";
    document.getElementById('groinStuff').style.display="none";
    document.getElementById('legStuff').style.display="none";
    document.getElementById('upperBackStuff').style.display="none";
    document.getElementById('lowerBackStuff').style.display="none";
    document.getElementById('backHeadStuff').style.display="none";
    document.getElementById('armStuff').style.display="block";    
  }

  render() {
    return (
      <div>
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      
{/*ENGLISH version*/}
      {this.state.show &&
        <form key='1'>



        <div className="row">



        <div className="col s12 m6 center-align">
        Please select you areas of concern:
        <br/>
        <br/>

        <img src={require('../img/malefront.png')} width="100" height="300" useMap="#malefront">
        </img>&emsp;
        <img src={require('../img/maleback.png')} width="100" height="300" useMap="#maleback">
        </img>

{/*This is the map area for the male front. More points can be added if necessary.*/}
        <map name="malefront">

        <area className="head" shape="rect" coords="30,0,70,40" onClick={this.toggleHead.bind(this)}></area>
        <area className="neck" shape="rect" coords="40, 37, 60, 45" onClick={this.toggleNeck.bind(this)}></area>
        <area className="chest" shape="rect" coords="22, 45, 77, 95" onClick={this.toggleChest.bind(this)}></area>
        <area className="abs" shape="rect" coords="22, 95, 77, 140" onClick={this.toggleAbs.bind(this)}></area>
        <area className="shoulder" shape="rect" coords="22, 90, 77, 140" onClick={this.toggleShoulder.bind(this)}></area>
        <area className="groin" shape="rect" coords="20, 140, 80, 177" onClick={this.toggleGroin.bind(this)}></area>
        <area className="leg" shape="rect" coords="20, 177, 80, 350" onClick={this.toggleLeg.bind(this)}></area>
        <area className="shoulder" shape="rect" coords="5,45,95,75" onClick={this.toggleShoulder.bind(this)}></area>
        <area className="arms" shape="rect" coords="0, 60, 15, 175" onClick={this.toggleArms.bind(this)}></area>
        <area className="arms2" shape="rect" coords="75,60,370,230" onClick={this.toggleArms.bind(this)}></area>
        </map>

{/*This is the map area for the male back. More points can be added if necessary.*/}
        <map name="maleback">

        <area className="upperback" shape="rect" coords="22,45,77,110" onClick={this.toggleUpperBack.bind(this)}></area>
        <area className="lowerback" shape="rect" coords="22,110,80,165" onClick={this.toggleLowerBack.bind(this)}></area>
        <area className="leg" shape="rect" coords="20, 278, 80, 350" onClick={this.toggleLeg.bind(this)}></area>
        <area className="backhead" shape="rect" coords="32,0,67,40" onClick={this.toggleBackHead.bind(this)}></area>
        </map>
        </div>


{/*NECK AREA*/}
        <div className="col s12 m6 center-align" id="specificPains">
        <div id="neckStuff">
        What are you experiencing in your <b>NECK AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>


        </div>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLEEDING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WEAKNESS</a></div>

        </div>


        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">COUGHING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WHEEZING</a></div>

        </div>
        </div>

{/*HEAD AREA*/}
        <div id="headStuff">


        Where are you experiencing your symptom?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">HEAD</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">EYE</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">NOSE</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">MOUTH</a></div>

        </div>

        What are you experiencing in your <b>HEAD AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLEEDING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WEAKNESS</a></div>

        </div>

        </div>

{/*CHEST AREA*/}
        <div id="chestStuff">


        What are you experiencing in your <b>CHEST AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>


        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WHEEZING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">COUGHING</a></div>

        </div>

        </div>

{/*ARM AREA*/}
        <div id="armStuff">


      Where are you experiencing your symptom?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">UPPER ARM</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">LOWER ARM</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WRIST</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">HAND</a></div>

        </div>

        What are you experiencing in your <b>ARM AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLEEDING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WEAKNESS</a></div>

        </div>

        </div>



{/*SHOUDLER AREA*/}
        <div id="shoulderStuff">


        What are you experiencing in your <b>SHOULDER AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>


        </div>






{/*ABS AREA*/}
        <div id="absStuff">


        What are you experiencing in your <b>ABDOMINAL AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>


        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INDIGESTION</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">CONSTIPATION</a></div>

        </div>

        </div>





{/*GROIN AREA*/}
        <div id="groinStuff">


        What are you experiencing in your <b>GROIN AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>


        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLOOD IN PEE</a></div>


        </div>

        </div>





{/*LEG AREA*/}
        <div id="legStuff">


        Where are you experiencing your symptom?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">UPPER LEG</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">KNEE</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">LOWER LEG</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">FEET</a></div>

        </div>

        What are you experiencing in your <b>LEG AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLEEDING</a></div>

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WEAKNESS</a></div>

        </div>

        </div>




{/*UPPER BACK AREA*/}
        <div id="upperBackStuff">

        What are you experiencing in your <b>UPPER BACK AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>


        </div>




{/*BACK HEAD AREA*/}
        <div id="backHeadStuff">

        What are you experiencing in your <b>BACK HEAD AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>
        </div>
        <div className="row">
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BLEEDING</a></div>
        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">WEAKNESS</a></div>
        </div>
        </div>



{/*LOWER BACK AREA*/}
        <div id="lowerBackStuff">


        What are you experiencing in your <b>LOWER BACK AREA</b>?<br/><br/>

        <div className="row">

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PAIN</a></div>

        <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DISCOMFORT</a></div>

        </div>

        </div>







        </div>

        </div>
        <div className='row'>
          <div className='col s6'>
            <a className="waves-effect waves-light btn secondary left" onClick={this.clickBack.bind(this)}>Back</a>
          </div>
          <div className='col s6'>
            <a className="waves-effect waves-light btn primary right" onClick={this.clickNext.bind(this)}>Next</a>
          </div>
        </div>


        </form>
      }
  {/*SPANISH version*/}
      {this.state.show && this.props.language==='spanish' &&
  <form key='1'>



  <div className="row">



  <div className="col s12 m6 center-align">
  Seleccione las áreas de interés:
  <br/>
  <br/>

  <img src={require('../img/malefront.png')} width="100" height="300" useMap="#malefront">
  </img>&emsp;
  <img src={require('../img/maleback.png')} width="100" height="300" useMap="#maleback">
  </img>

  <map name="malefront">

  <area className="head" shape="rect" coords="30,0,70,40" onClick={this.toggleHead.bind(this)}></area>
  <area className="neck" shape="rect" coords="40, 37, 60, 45" onClick={this.toggleNeck.bind(this)}></area>
  <area className="chest" shape="rect" coords="22, 45, 77, 95" onClick={this.toggleChest.bind(this)}></area>
  <area className="abs" shape="rect" coords="22, 95, 77, 140" onClick={this.toggleAbs.bind(this)}></area>
  <area className="shoulder" shape="rect" coords="22, 90, 77, 140" onClick={this.toggleShoulder.bind(this)}></area>
  <area className="groin" shape="rect" coords="20, 140, 80, 177" onClick={this.toggleGroin.bind(this)}></area>
  <area className="leg" shape="rect" coords="20, 177, 80, 350" onClick={this.toggleLeg.bind(this)}></area>
  <area className="shoulder" shape="rect" coords="5,45,95,75" onClick={this.toggleShoulder.bind(this)}></area>
  </map>

  <map name="maleback">

  <area className="upperback" shape="rect" coords="22,45,77,110" onClick={this.toggleUpperBack.bind(this)}></area>
  <area className="lowerback" shape="rect" coords="22,110,80,165" onClick={this.toggleLowerBack.bind(this)}></area>
  <area className="leg" shape="rect" coords="20, 278, 80, 350" onClick={this.toggleLeg.bind(this)}></area>
  <area className="backhead" shape="rect" coords="32,0,67,40" onClick={this.toggleBackHead.bind(this)}></area>
  </map>
  </div>



  <div className="col s12 m6 center-align" id="specificPains">
  <div id="neckStuff">
 ¿Qué estás experimentando en <b>la zona del cuello</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>


  </div>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRÍA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DEBILIDAD</a></div>

  </div>


  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">TOSER</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SIBILANCIAS</a></div>

  </div>
  </div>



  <div id="headStuff">


¿Dónde está experimentando su síntoma?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">CABEZA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">OJOS</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">NARIZ</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">BOCA</a></div>

  </div>

¿Qué estás experimentando en tu <b>área de la cabeza?</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRÍA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DEBILIDAD</a></div>

  </div>

  </div>


  <div id="chestStuff">


  ¿Qué estás experimentando en tu <b>área del pecho</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>


  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SIBILIANCIAS</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">TOSER</a></div>

  </div>

  </div>

 <div id="armStuff">


¿Dónde está experimentando su síntoma?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PARTE SUPERIOR DEL BRAZO</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">ANTEBRAZO</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">MUÑECA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">MANO</a></div>

  </div>

¿Qué estás experimentando en tu <b>área del brazo?</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRÍA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DEBILIDAD</a></div>

  </div>

  </div>



  <div id="shoulderStuff">


  Lo que está experimentando en su <b>área de los hombros</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>


  </div>







  <div id="absStuff">


  ¿Qué está experimentando en su <b>área abdominal</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>


  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INDIGESTIÓN</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">ESTREÑIMIENTO</a></div>

  </div>

  </div>






  <div id="groinStuff">


  ¿Qué estás experimentando en <b>la zona de la ingle</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>


  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRE EN PIE</a></div>


  </div>

  </div>






  <div id="legStuff">


  ¿Dónde está experimentando su síntoma?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">MUSLO</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">RODILLA</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PIERNA INFERIOR</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">PIES</a></div>

  </div>

  ¿Qué estás experimentando en <b>el área de tus piernas?</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRÍA</a></div>

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DEBILIDAD</a></div>

  </div>

  </div>





  <div id="upperBackStuff">

  ¿Qué está experimentando en su <b>zona inferior de la espalda</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>


  </div>





  <div id="backHeadStuff">

  Lo que está experimentando en la parte posterior de su <b>área de la cabeza?</b><br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>
  </div>
  <div className="row">
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">SANGRÍA</a></div>
  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DEBILIDAD</a></div>
  </div>
  </div>




  <div id="lowerBackStuff">


  ¿Qué está experimentando en su <b>zona inferior de la espalda</b>?<br/><br/>

  <div className="row">

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">DOLOR</a></div>

  <div className="col s12 m6 center-align"><a onClick={this.selectedPain.bind(this)} href="#" className="btn-flat borderbutton">INCOMODIDAD</a></div>

  </div>

  </div>







  </div>

  </div>
  <div className='row'>
    <div className='col s6'>
      <a className="waves-effect waves-light btn secondary left" onClick={this.clickBack.bind(this)}>Anterior</a>
    </div>
    <div className='col s6'>
      <a className="waves-effect waves-light btn primary right" onClick={this.clickNext.bind(this)}>Siguiente</a>
    </div>
  </div>


  </form>
}
      </CSSTransitionGroup>
      <CSSTransitionGroup
      transitionName='button'
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show && false &&
       <a id="scale-demo" href="#!" className="btn-floating btn-large">
       <i className="material-icons">add</i>
       </a>
     }
     </CSSTransitionGroup>
     </div>
     );
}
}

export default Page_Symptom;
