class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTemp: this.props.tempInfo        
        }
      
    }
    
     render(){
         return (
             <div>
                 <NavBar/>
                 <Body currentTemp = {this.state.currentTemp}/>     
                 <Footer/>
             </div>
         ); 
     }
     
 }
 