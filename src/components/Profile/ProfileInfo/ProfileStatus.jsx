import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateStatusEditor(){
        this.setState({
            editMode : true
        });
    }
    deactivateStatusEditor(){
        this.setState({
            editMode : false
        });
        this.props.sendNewStatus(this.state.status);
    }

    onStatusChanges = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return <div>
            PROFILE STATUS:{this.state.editMode ?
                <input onChange={this.onStatusChanges} value={this.state.status} onBlur={this.deactivateStatusEditor.bind(this)}/>
                : <span onDoubleClick={this.activateStatusEditor.bind(this)}>{this.props.status}</span>}
        </div>
    }
}

export default ProfileStatus;