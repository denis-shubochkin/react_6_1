import React from 'react';
import arrowM from '../../pic/arrow.png';
import arrowH from '../../pic/arrowH.png';
import arrowS from '../../pic/arrowS.png';
import './Clock.css';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
       // this.state = {time : new Date().getHours()+':'+ new Date().getMinutes() + ':' + new Date().getSeconds()};
        this.state = {state: true};
        this.tzdiff = new Date().getTimezoneOffset();
        this.interval = null;
    }
        

    getH() {
        if(this.props.clock.timezone.substring(0,1)==='-')
        {
            return Number(this.props.clock.timezone.substring(1))*(-1)
        }
        else return Number(this.props.clock.timezone.substring(1))
    }

    componentDidMount() {
       this.interval = setInterval(()=>{
         this.setState({state: true});
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onDelHandler(e) {
        console.log(e.target.id);
        this.props.onDel(e.target.id);
    }

    

render() {
    const stylesM = { 
        position: `absolute`,
        transformOrigin: `center bottom`,
        transform: `rotate(${new Date().getMinutes()*6}deg)`,
        left: `45%`,
        height: '50%'
    };
    const stylesH = { 
        position: `absolute`,
        transformOrigin: `center bottom`,
        transform: `rotate(${(new Date().getHours()+this.getH()+(this.tzdiff/60))*30}deg)`,
        left: `45%`,
        top: '10%',
        height: '40%'
    };
    const stylesS = { 
        position: `absolute`,
        transformOrigin: `center bottom`,
        transform: `rotate(${new Date().getSeconds()*6}deg)`,
        left: `47%`,
        height: '50%'
    };
     return(
    <div className="Clock">
        <div className="City">{this.props.clock.city}
        <button className="Delete" id={this.props.clock.id} onClick={evt=>this.props.onDel(evt.target.id)}>×</button></div>
        <div className="ClockBlock">
            <div className="Circle"> 
            <img className="Arrow" src={arrowM} alt='...' style={stylesM}></img>
            <img className="Arrow" src={arrowH} alt='...' style={stylesH}></img>
            <img className="Arrow" src={arrowS} alt='...' style={stylesS}></img>
            </div>
       
        </div>
    </div>
)}
   
}