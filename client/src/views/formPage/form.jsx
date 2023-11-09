import style from './form.module.css'
import { useState } from 'react';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios";

const Form = () => {
    const allCountries = useSelector((state)=>state.countries)
    const season = ["Summer", "Autumn", "Winter", "Spring"]
    
    const [form, setForm] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:[],
        countries:[]
    }) 
    const [errors,setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:"",
    })


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        switch (property) {
            case "seasons":
                const seasonChecked = event.target.checked;
                const seasonValue = event.target.value;
                  setForm((prevForm) => {
                    const updatedSeasons = seasonChecked
                      ? [...prevForm.season, seasonValue]
                      : prevForm.season.filter((s) => s !== seasonValue);
                    const updatedForm = { ...prevForm, season: updatedSeasons };
                    validate(updatedForm);
                    return updatedForm;
                  })
                break;
            case "countries":
                const countrieSelected = event.target.checked
                const countryValue = event.target.value;
                  setForm((prevForm) => {
                    const updatedCountries = countrieSelected
                      ? [...prevForm.countries, countryValue]
                      : prevForm.countries.filter((c) => c !== countryValue);
                    const updatedForm = { ...prevForm, countries: updatedCountries };
                    validate(updatedForm);
                    return updatedForm;
                })
                break;
            default:
                //default sirve para name/difficulty/duration/
                setForm({...form,[property]:value})
                validate({...form,[property]:value})
                break;
        }
    };


    const validate = (form) => {
        //name validation
        if(form.name===""){
            setErrors((prevErrors) => ({ ...prevErrors, name: "Name not null" }));
        }else{
            setErrors((prevErrors) => ({ ...prevErrors, name: "✔" }));
        }
        //difficulty validation
        if(form.difficulty<1){
            setErrors((prevErrors) => ({ ...prevErrors, difficulty: "no less than 1 difficulty" }));
        }else if(form.difficulty>5){
            setErrors((prevErrors) => ({ ...prevErrors, difficulty: "no greater than 1 difficulty" }));
        }else{
            setErrors((prevErrors) => ({ ...prevErrors, difficulty: "✔" }));
        }
        //duration validation
        if(form.duration<0.5||form.duration===""){
            setErrors((prevErrors) => ({ ...prevErrors, duration: "required a minimum of half an hour" }));
        }else{
            setErrors((prevErrors) => ({ ...prevErrors, duration: "✔" }));
        }
        //duration validation
        if(!form.season.length){
            setErrors((prevErrors) => ({ ...prevErrors, season: "select one or more stations" }));
        }else{
            setErrors((prevErrors) => ({ ...prevErrors, season: "✔" }));
        }
        //countries validation
        if(!form.countries.length){
            setErrors((prevErrors) => ({ ...prevErrors, countries: "select one or more countries" }));
        }else{
            setErrors((prevErrors) => ({ ...prevErrors, countries: "✔" }));
        }
    };


    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post("https://backpicountries-4pdg.onrender.com/activities", form)
        .then(res=>alert("Posted successfully!"))
        .catch(err=>alert("We were unable to post your activity, please try again or review the data you entered"))
    }


    return (
        <>
            <form className={style.form} onSubmit={submitHandler}>
                <h1 className={style.title}>Create Activity</h1>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <div className={style.divCampo}>
                        <label><h4>Activity Name:</h4>
                            <input  className={style.input} name="name" type="text" value={form.name} onChange={changeHandler} placeholder="Name..." />
                            <br /><span>{errors.name}</span>
                        </label>
                        </div>
                        <div className={style.divCampo}>
                        <label><h4>Difficulty</h4>
                            <input className={style.input}
                                name="difficulty" 
                                type="number" 
                                value={form.difficulty} 
                                step="1" 
                                placeholder="1..5" 
                                onChange={changeHandler}   
                            />
                            <br />
                            <span>{errors.difficulty}</span>
                        </label>
                        </div>
                        <div className={style.divCampo}>
                        <label><h4>Duration</h4>
                            <input className={style.input}
                                name="duration" 
                                type="number" 
                                value={form.duration} 
                                step="0.5"
                                placeholder="hours..." 
                                onChange={changeHandler}   
                            />
                            <br />
                            <span>{errors.duration}</span>
                        </label>
                        </div>
                        <div className={style.divCampo}>
                        <label><h4>Select Seasons:</h4></label>
                        {season.map((s, index)=>(
                        <label key={index}>
                                    <input 
                                    type="checkbox"
                                    name="seasons"
                                    value={s}
                                    checked={form.season.includes(s)}
                                    onChange={changeHandler}
                                    />{" "}
                                    {s}
                                </label>))}
                                <br />
                            <span>{errors.season}</span>
                        </div>
                    </div>

                        <div className={style.div3}>
                        <div className={style.titleCountries}>
                        <label>Select Countries</label>
                        </div>
                        <span>{errors.countries}</span>
                        <div>
                            {allCountries?.map((c) => (
                                <label key={c.id}>
                                    <input
                                        type="checkbox"
                                        name="countries"
                                        value={c.id}
                                        checked={form.countries.includes(c.id)}
                                        onChange={changeHandler}
                                        />{c.name}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                    <button  className={style.submit} type='submit'>POST ACTIVITY</button>
            </form>
        </>
    );
};
  
export default Form;