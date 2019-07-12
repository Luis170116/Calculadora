import  React, {Component} from "react";
import { __values } from "tslib";

class Contenedor extends Component{
constructor(){
super()
this.state = {
    Resultado:"",
    Agregar:"",
    Designar:"",
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
clickEnSiete =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"7"})
}
clickEnOcho =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"8"})
}
clickEnNueve =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"9"})
}
clickEnCero =()=>{
    const {Resultado} = this.state; 
    this.setState({Resultado:Resultado +"0"})


}
clickEnSumar=()=>{
    const {Resultado} =this.state;
  
    this.setState({Resultado:''})
    this.setState({Entregar:Resultado})
    this.setState({Designar:'Suma'})
}
clickEnRestar=()=>{
    const {Resultado} =this.state;
  
    this.setState({Resultado:''})
    this.setState({Entregar:Resultado})
    this.setState({Designar:'Resta'})
}
clickEnMultiplicar=()=>{
    const {Resultado} =this.state;
  
    this.setState({Resultado:''})
    this.setState({Entregar:Resultado})
    this.setState({Designar:'Multiplicar'})
        }
        clickEnDividir=()=>{
            const {Resultado} =this.state;
          
            this.setState({Resultado:''})
            this.setState({Entregar:Resultado})
            this.setState({Designar:'Dividir'})
            }
            clickPordos=()=>{
                const {Resultado} =this.state;
              const NuevoResultado =(parseInt(Resultado)*2)+"";
                this.setState({Resultado:NuevoResultado })
            }
            clickEnIgual=()=>{
                const {Resultado} =this.state;
                const {Entregar} =this.state;
                const {Designar} =this.state;
                
                if (Designar==='Suma') {
                     const Suma = (parseInt(Entregar) +parseInt(Resultado)+"")
               this.setState({Resultado:Suma})
                } else if (Designar==='Resta') {
                    const Suma = (parseInt(Entregar) -parseInt(Resultado)+"")
              this.setState({Resultado:Suma})
               } else if (Designar==='Dividir') {
                const Suma = (parseInt(Entregar) /parseInt(Resultado)+"")
                    this.setState({Resultado:Suma})
                 } else if (Designar==='Multiplicar') {
                const Suma = (parseInt(Entregar) *parseInt(Resultado)+"")
                  this.setState({Resultado:Suma})
       } 
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
        <button onClick={this.clickEnSiete}>7</button>
        <button onClick={this.clickEnOcho}>8</button>
        <button onClick={this.clickEnNueve}>9</button>
        <button onClick={this.clickEnCero}>0</button>
       
        <div></div>
        <button onClick={this.clickEnSumar}>+</button>
        <button onClick={this.clickEnRestar}>-</button>
        <button onClick={this.clickEnMultiplicar}>x</button>
        <button onClick={this.clickEnDividir}>/</button>
        <button onClick={this.clickEnIgual}>=</button>

       
        Resultado :{Resultado}
            </div>
           
        )
        }
}


export default Contenedor