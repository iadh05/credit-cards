import React ,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numberCard:'',
     date:'',
     companyName:''
    }
     
    }
   

     cardRender= (number)=>{
  
      let nbrcard=""
      let x=number.toString()
     
      for(let i=0;i<x.length;i+=4)
      { nbrcard+=x.slice(i,i+4)+' '}
     return nbrcard 
    
    }

   handleinputNumbercard=(event)=>{
 this.setState({ numberCard:event.target.value
 })
 this.testnumber()
  }
 
    testnumber=()=>{
    let regex=/^[0-9]*$/gm
    if(regex.test(this.state.numberCard)===false)
    alert('alert ')
  
    

  }
  handleinputDate =(event) =>{
    this.setState({
     date:event.target.value

    })
    
    }
    dateTest=()=>{
      if(this.state.date.length===4)
      
  { console.log(this.state.date.length) 
    let x=Number(this.state.date.toString().slice(0,2))
    
      if(x>12 || x<1)
    alert('invalid month')
    let y=Number(this.state.date.toString().slice(2))
    if(y<18)
    alert('date expired')}

    }
  renderNumber=(number)=>{
    this. dateTest()
  let x=number.toString()
  let cardDate=""
  if(x.length==4)
  
  cardDate=x.slice(0,2)+'/'+x.slice(2)
  return cardDate

  }
  handlerCompanyName=(event)=>{
 this.setState({
   companyName:event.target.value
 })

 this.testcompanyName()
  }
 
  testcompanyName=()=>{
  let regex=/[0-9_.*/,:;+=)àç_('"é&!@#$%^&*-]/g
  if(regex.test(this.state.companyName)===true)
  alert('alert ')

  

}
  

  render() { 
    return (  <div className="credit-card">
    <h1 className="title">credit card</h1>
    <img src="chip-card.png" alt="" className="chip-card" />
    <div>
      <div className="num-de-serie"> {this.cardRender(this.state.numberCard)}</div>
      <div className="content">
        <h3 className="num">5422</h3>
        <div className="info">
          <p className="validation">valid <br />thru</p>
          <div className="triangle"></div>
          <div className="year-month">
            <p className="date">month/year</p>
            <p className="datenum">{this.renderNumber(this.state.date)}</p>
          </div>
        </div>
      </div>
      <h2 className="cardholder">{this.state.companyName.toUpperCase()}</h2>
      <div>
        <img src="MasterCard-6.gif" alt="" className="mastercard" />
        <img src="Visa.png" alt="" className="visa" />
      </div>
    </div>
    <div className='inputData'>
      <label><input type='text' value={this.state.numberCard}  onChange={(e)=>this.handleinputNumbercard(e)} maxLength="16"  name='number-card'/> </label>
      <label><input type='text' name='Date-card' value={this.state.date} onChange={(e)=>this.handleinputDate(e)}  maxLength="4"/></label>
      <label><input type='text' name="cardholder" value={this.state.companyName} onChange= {(e)=>this.handlerCompanyName(e) } maxLength="20" /></label>
    </div>
  </div>);
  }
}
 

export default App;
