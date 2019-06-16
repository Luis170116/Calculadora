import  React, {Component} from "react";
import { __values } from "tslib";

class Contenedor extends Component{
constructor(){
super()
this.state = {
    Resultado:"",
    Auxiliar:"",
    Auxiliar1:"",
    Auxiliar2:"",
    Auxiliar3:"",
}
} 
clickAumentar =()=>{""
}
clickEnUno =()=>{
const {Resultado} = this.state

this.setState({Resultado:Resultado +"1"})
}
clickEnDos =()=>{
    const {Resultado} = this.state; 

this.setState({Resultado:Resultado +"2"}) 
}
clickEnTres =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"3"})
}
clickEnCuatro =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"4"})
}
clickEnCinco =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"5"})
}
clickEnSeis =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"6"})
}
clickEnSumar =()=>{
const {Resultado} = this.state;
this.setState({Auxiliar:Resultado,Resultado:""})
}
clickEnRestar =()=>{
    const {Resultado} = this.state;
    this.setState({Auxiliar1:Resultado,Resultado:""})
    }
    clickEnMultiplicar =()=>{
        const {Resultado} = this.state;
        this.setState({Auxiliar2:Resultado,Resultado:""})
        }
        clickEnDividir =()=>{
            const {Resultado} = this.state;
            this.setState({Auxiliar3:Resultado,Resultado:""})
            }
clickEnIgual =()=>{
    const {Auxiliar,Resultado} = this.state; 
    const sumaDeNumeros = parseInt(Auxiliar) + parseInt(Resultado) 
    this.setState({Resultado:sumaDeNumeros})
  switch (Auxiliar1) {
      case value:
          
          break;
  
      default:
          break;
  }
   const {Auxiliar1,Resultado} = this.state; 
    const {Auxiliar1,Resultado} = this.state; 
    const {Auxiliar2,Resultado} = this.state; 
    const {Auxiliar3,Resultado} = this.state; 

    
    const restaDeNumeros = parseInt(Auxiliar1) - parseInt(Resultado) 
    const multiplicarDeNumeros = parseInt(Auxiliar2) * parseInt(Resultado) 
    const dividirDeNumeros = parseInt(Auxiliar3) / parseInt(Resultado) 


this.setState({Resultado:restaDeNumeros})
this.setState({Resultado:multiplicarDeNumeros})
this.setState({Resultado:dividirDeNumeros})
}


render(){
    const {Resultado} = this.state;
    return (
        <div>
            <div>
               Resultado:{Resultado}
            </div>
       
        <button onClick={this.clickEnUno}>1</button>
        <button onClick={this.clickEnDos}>2</button>
        <button onClick={this.clickEnTres}>3</button>
       <div></div>
        <button onClick={this.clickEnCuatro}>4</button>
        <button onClick={this.clickEnCinco}>5</button>
        <button onClick={this.clickEnSeis}>6</button>
        <div></div>
        <button onClick={this.clickEnSumar}>+</button>
        <button onClick={this.clickEnRestar}>-</button>
        <button onClick={this.clickEnMultiplicar}>x</button>
        <button onClick={this.clickEnDividir}>/</button>
        <button onClick={this.clickEnIgual}>=</button>

       
        </div>
        
        
    )
}
}


export default Contenedor