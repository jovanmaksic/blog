import React from 'react';
import {connect} from 'react-redux';
import {fechUser} from '../actions';


class UserHeader extends React.Component{
    componentDidMount(){
        console.log(this.props);
        this.props.fechUser(this.props.userId);
    }

    render(){
        const user = this.props.users.find((user) => user.id === this.props.userId);
            if(!user){
                return null;
            }
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps =(state) =>{
    return {
        users: state.users
    };
};

export default connect(mapStateToProps,{
    fechUser: fechUser
})(UserHeader);