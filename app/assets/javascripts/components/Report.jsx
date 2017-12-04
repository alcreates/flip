const reportBG = {
    backgroundColor: "#FFFFF",
    marginTop: "40px",
    marginBottom:"100px"
};


class Report extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : [this.props.data]
           
        }
    }
    componentWillReceiveProps(nextProps) {

        this.setState({ 
            
            data: [...this.state.data, nextProps.data]
        
        }); 
     }
    
      render(){
          return (
              <div className="col-12" style={reportBG}>
                <h3>Report</h3>
               
                <Table data = {this.state.data }/>

              </div>
          ); 
      }
      
  }
 