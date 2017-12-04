class Rows extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
      console.log(this.state.data, 'in rows');
    }
    componentWillReceiveProps(nextProps) {
        
                this.setState({ 
                    
                    data: nextProps.data
                
                }); 
                console.log(this.state.data, "next props rows")
    }
    
      render(){
         
           let rows =  this.state.data.map((row, index) => {
              
                return(
                    <tr key={index}>
                        <td>{moment.unix(row.dt).format('MMMM Do YYYY')}</td>
                        <td>{moment.unix(row.dt).format('h:mm:ss a')}</td>
                        <td>{ row.main.temp }</td> 
                        <td>{ row.weather[0].main}</td>
                    </tr>
                ) 
            });
                 
            return (

                <tbody>
                     { rows }  
                </tbody>
            );
               
         
      }
      
  }
