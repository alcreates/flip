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
    componentDidMount() { 
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=10001,us&APPID=97ba0137a822f0aa0167956e1aa88b78', (response) => {
        console.log(response);     
        this.setState({ currentTemp : response }) }); 
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
