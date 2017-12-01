const bodyBG = {
    backgroundColor: "#FFFFF",
    height: "500px"
};


class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTemp: this.props.currentTemp       
        }
      
    }
   
     render(){
         return (
             <div style={bodyBG}>
                <div className="container">               
                 <h2>Temperatures</h2>
                 <FundChart currentTemp={this.state.currentTemp}/> 
                 <Report/>   
                </div>                 
             </div>
         ); 
     }
     
 }
