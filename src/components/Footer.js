import dananz from "../images/dananz.png";  
import "../styles/footer.css";

function Footer() {
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
        <div className="row mx-auto">
            <div className="col-6">
                <img className="pl-4 pt-2" src={dananz} alt="" />
                <h4 className="h4-nxting">One of the best furniture agency.</h4>
            </div>
            <div className="col-6"></div>
        </div>
    </div>
  )
}

export default Footer;
