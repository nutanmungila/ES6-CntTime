import React from 'react'

class Count extends React.Component{
    constructor(props){
    	super(props);
    	this.state = {count:0}
    	
    }


   componentWillMount(){
   	var start = new Date().getTime();

   	setInterval( ()=>{
   		var valSec = Math.round(  (new Date().getTime() - start)/1000 );

   		this.setState({count:valSec});
   		
   	},1000)


   }
    
	render(){
		

		return(
			<p>
			running from {this.state.count} seconds
			</p>
			);

	}
}
React.render( <Count />,document.getElementById("div1"));
