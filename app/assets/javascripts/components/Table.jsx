  
class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
      console.log(this.state.data);
    }
    componentWillReceiveProps(nextProps) {
        
                this.setState({ 
                    
                    data: nextProps.data
                
                }); 
    }
 
    
      render(){
        
          return (
            <table className="table">
                <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Temperature</th>
                        <th>Desc</th>
                        </tr>
                </thead>
                
                  <Rows data={this.state.data}/>
            </table>
          ); 
      }
      
  }
