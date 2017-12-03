const bodyBG = {
    backgroundColor: "#FFFFF",
    height: "500px"
};


class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : null,
            timeArr: [],
            tempArr: []
        }
        const self = this;
        this.getData();
        
       // setInterval(function(){ self.getData() }, 20000);
        
    }
    getData(){
        console.log("get data");
       
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=10001,us&APPID=97ba0137a822f0aa0167956e1aa88b78', (response) => {
            let currentTimeArr = this.state.timeArr;
            if( currentTimeArr.length > 10 ){
                this.state.timeArr.shift();
                this.state.tempArr.shift();
            }    

            this.setState({
                data : response,
                timeArr: [...this.state.timeArr, response.dt],
                tempArr: [...this.state.tempArr, response.main.temp]
            });

           
        });
    }
   
     render(){
         if( this.state.data === null ){
             return <div>loading ...</div>
         }
         return (
             <div style={bodyBG}>
                <div className="container">               
                 <h2>Temperatures</h2>
                 {moment.unix(1512341400).format('MMMM Do YYYY, h:mm:ss a') }
                 
                 <FundChart time={this.state.timeArr} temp ={this.state.tempArr} data = {this.state.data} /> 
                 <Report/>   
                </div>                 
             </div>
         ); 
     }
     
 }
