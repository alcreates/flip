class FundChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTemp: this.props.currentTemp       
        }
      
    }
    componentDidMount () {
        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [200, 10, 5, 2, 20, 30, 45],
                }]
            },
        
            // Configuration options go here
            options: {}
        });
    }
      render(){
          return (
              <div>
                
                <canvas id="myChart"></canvas>
 
              </div>
          ); 
      }
      
  }
