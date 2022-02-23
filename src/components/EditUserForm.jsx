import React from "react";
import { useForm } from 'react-hook-form'; //libreria de validacion de formularios

const EditUserForm = (props) => {

    // console.log(props.currentUser);

    //Menejo de la libreria hook-form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        // Se definen los valores del currentUser que son enviado por el componente UserTable
        // Se llena el formulario automaticamente por el register
        defaultValues: props.currentUser
    });

    // Aplican los valores que se van ingresando por el currentUser
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);


    const onSubmit = (data, e) => {
        console.log(data);

        //permite actualizar la info en la tabla cuando submit
        props.updateUser(props.currentUser.id, data);
        // props.updateUser(data.id, data);

        //Limpia el input despues del submit
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id='name'
                name="name"
                {
                ...register(
                    'name',
                    { required: { value: true, message: 'Campo requerido' } }
                )
                }
            />
            <span>
                {errors?.name?.message}
            </span>

            <label>Username</label>
            <input
                type="text"
                name="username"
                {
                ...register(
                    'username',
                    { required: { value: true, message: 'Campo requerido' } }
                )
                }
            />
            <span>
                {errors?.username?.message}
            </span>

            <button type="submit">Edit user</button>
            <button
                type="button"
                className="button muted-button"
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>

        </form >
    );
};

export default EditUserForm;
