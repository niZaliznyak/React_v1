import React, {useEffect, useState} from "react";


const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);//возвращает массив, где первым значение будет false, а вторым функция меняющая первое значение
    let [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const deactivateStatusEditor = () => {
        setEditMode(false);
        props.sendNewStatus(status);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    return <div>
        PROFILE STATUS:
        {!editMode && <span onDoubleClick={()=>setEditMode(true)}>{status}</span>}
        {editMode && <input onChange={onStatusChange} onBlur={deactivateStatusEditor} value={status}></input>}

    </div>

}

export default ProfileStatusHooks;