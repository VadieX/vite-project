import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../data/AppContext';

const Lab4EditPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { items, dispatch } = useContext(AppContext);

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            dispatch({ type: 'add', payload: data });
            alert('Pomyślnie dodano profil');
            reset();
        }
        else {
            console.log(errors);
        }
    }
    console.log(items);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div>
                    <label>Birth:</label>
                    <input type="date" {...register("birth", { required: true })} />
                    {errors.birth && <span>This field is required</span>}
                </div>
                <div>
                    <label>Eyes:</label>
                    <input {...register("eyes", { required: true })} />
                    {errors.eyes && <span>This field is required</span>}
                </div>
                <button type="submit">Add Profile</button>
            </form>
        </>
    );
}
export default Lab4EditPage;