const bodyBG = {
    backgroundColor: "#FFFFF",
    marginTop : '50px'
   
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
        // this.getData();
        
        //  setInterval(function(){ self.getData() }, 20000);
        
    }
    getData(){
        
       
        $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=10001,us&APPID=97ba0137a822f0aa0167956e1aa88b78', (response) => {
            let currentTimeArr = this.state.timeArr;
            if( currentTimeArr.length > 10 ){
                this.state.timeArr.shift();
                this.state.tempArr.shift();
            }

            let convertedTime = moment.unix(response.dt).format('h:mm:ss a');
            this.setState({
                data : response,
                timeArr: [...this.state.timeArr, convertedTime],
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
                 
                 <div className="row">
                     <FundChart time={this.state.timeArr} temp ={this.state.tempArr} data = {this.state.data} /> 

                 </div>
                 <div className="row">
                      <Report data={this.state.data}/> 
                 </div>
                
                </div>                 
             </div>
         ); 
     }
     
 }
