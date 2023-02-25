import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved ')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onBlur={focusLostHandler} onChange={onNameChanged}>vova</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name='delete' onClick={deleteUser}>delete</button>
            <button name='delete'  onClick={saveUser}>save</button>
        </div>
    )
}

