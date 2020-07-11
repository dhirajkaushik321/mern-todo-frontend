import React,{useState} from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
const Profile = () => {
    const [file,setFile]=useState('')
    const [fileName,setFileName]=useState('choose file')
    const imgSrc= `https://mern-todo-backend17502.herokuapp.com/api/user/${localStorage.getItem('id')}/profile`
    const onChange=e=>{
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    const onSubmit=async e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('file',file )
        try{
            await axios.post('https://mern-todo-backend17502.herokuapp.com/api/user/profile',formData,
            {
                headers:{ 
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('isImg',true)
            window.location.href='/'
        }catch(err){
        console.log(err);
        }
    }
    return (
        <>
        <Navbar/>
        <div className="container">
        <form onSubmit={onSubmit}>
            <h1 className="display-4 mt-5">Upload your profile picture</h1>
            <div className="mt-5 input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                    </span>
                </div>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={onChange} />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        {fileName}
                    </label>
                </div>
            </div>
            <button className="btn btn-lg btn-dark mt-2">Upload</button>
            </form>
            <img style={{width:'20%'}} src={imgSrc} alt="profile"/>
        </div>
        </>
    )
}

export default Profile
