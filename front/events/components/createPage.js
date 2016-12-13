import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'

class CreatePage extends React.Component{
	
	render() {
		//const data = this.props.user.toObject();
		return(
			<p>Book now!</p>
		)
	}
	
	
	
}

const mapStateToProps = (state) => {
  //var Events = state.getIn(["Data","Events"]);
 // return {Events};
 return {}
}

const mapDispatchToProps = {};

var VisibleCreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePage);

export default VisibleCreatePage;