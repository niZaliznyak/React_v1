import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return <div>
            PROFILE STATUS:{this.state.editMode ?
                <input value={this.props.status} onBlur={this.deactivateStatusEditor.bind(this)}/>
                : <span onDoubleClick={this.activateStatusEditor.bind(this)}>{this.props.status}</span>}
        </div>
    }
}

export default ProfileStatus;