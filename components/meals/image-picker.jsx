'use client';
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label,name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageRef = useRef();
    function handlePickClick(){
        imageRef.current.click();
    }
    function handleImageChange(event){
        const file = event.target.files[0];

        if (!file){
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    }
  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {pickedImage ? <Image src={pickedImage} alt='Picked Image' fill/> : <p>No Image Picked</p>}
            </div>
            <input ref={imageRef} onChange={handleImageChange} className={classes.input} required type="file" id={name} accept='image/png, image/jpeg' name={name}/>
            <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
  )
}
