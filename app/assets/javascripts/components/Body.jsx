const bodyBG = {
    backgroundColor: "#FFFFF",
    height: "500px"
};


class Body extends React.Component {
   
     render(){
         return (
             <div style={bodyBG}>
                <div className="container">
                 this is body
                 <FundChart/> 
                </div>                 
             </div>
         ); 
     }
     
 }
