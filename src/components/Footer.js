import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSwapRight } from "react-icons/ai";

import dananz from "../images/dananz.png";
import facebook from '../logos/facebook.jpg';
import instagram from '../logos/instagram.jpg';
import tiktok from '../logos/tiktok.jpg';
import youtube from '../logos/youtube.jpg';
import "../styles/footer.css";

function Footer() {
    const [email, setEmail] = useState("");
  return (
    <div>
        <div className="mt-4 p-5 jumbotron text-white">
            <div className="row">
            <div className="col-6">
                <h4 className="jumbotron-h4">
                    let's discuss making your interior like a dream place!
                </h4>
                </div>
            <div className="col-6">
                <div className="col">
                <p className="jumbotron-p">
                    Contact us below to work together to build your amazing interior
                </p>
                <button className='jumbotron-btn'>Contact Us</button>
                </div>
            </div>
            </div>
        </div>
        <div className="row mx-auto sm-screen">
            <div className="col-6">
                <img className="pl-4 pt-2" src={dananz} alt="" />
                <h4 className="h4-nxting sm-screen">One of the best furniture agency.</h4>
            </div>
            <div className="col-6 sm-screen-b">
                <label>
                    <h4 className="label-h4">
                        &#x2022; Enter  your email to get the laterst news
                    </h4>
                </label>
                
                <FormControl sx={{ m: 0, width: '70%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-email">
                        Email Address
                    </InputLabel>
                    <Input
                        id="standard-adornment-email"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="submit"
                            onClick={()=>{}}
                            >
                            < AiOutlineSwapRight />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                 </FormControl>
                 <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <p className='follow-p'>Follow us On</p>
                        <div className="row">
                            <div className="col-3">
                                <img src={facebook} className="rounded-circle mx-0"  alt="" />
                            </div>
                            <div className="col-3">
                                <img src={instagram} className="rounded-circle mx-0" alt="" />
                            </div>
                            <div className="col-3">
                                <img src={tiktok} className="rounded-circle mx-0" alt="" />
                            </div>
                            <div className="col-3">
                                <img src={youtube} className="rounded-circle mx-0" alt="" />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
