class FundChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            labelsArr: this.props.time,
            dataArr: this.props.temp      
        }
      console.log(this.state.labelsArr);
      
    }
    componentDidMount () {
        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: this.state.labelsArr,
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.state.dataArr,
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
