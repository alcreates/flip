const navBG = {
    backgroundColor: "#F5F5F5"
};


class NavBar extends React.Component {
   
     render(){
         return (
             <div>
                 <nav style={navBG} className="navbar navbar-light bg-faded">
                    <div className="container">
                        <img className="logo" alt="Fund That Flip logo" src="https://cdn.fundthatflip.com/assets/final_navbar_logocs-ada796bc16394059988c2e9f5244bd7cd3b275b9bdd91c783a587d374bcd0374.svg"></img>            
                    </div>

                 </nav>

             </div>
         ); 
     }
     
 }
 