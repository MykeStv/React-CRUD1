import React from "react";
import { useForm } from 'react-hook-form'; //libreria de validacion de formularios

const AddUserForm = (props) => {

    //Menejo de la libreria hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        //funcion addUser del componente App
        props.addUser(data);

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

            <button type="submit">Add new user</button>
        </form >
    );
};

export default AddUserForm;
