import unsplash_77JACslA8G0 from '../images/unsplash_77JACslA8G0.png';
import unsplash_7tFlUFGa7Dk from '../images/unsplash_7tFlUFGa7Dk.png';
import unsplash_sdRZrK4lVCk from '../images/unsplash_sdRZrK4lVCk.png';
import unsplash_JIUjvqe2ZHg from '../images/unsplash_JIUjvqe2ZHg.png';
import unsplash_dO3qTKxwik0 from '../images/unsplash_dO3qTKxwik0.png';
import unsplash_2_BZuGgkP4k from '../images/unsplash_2_BZuGgkP4k.png';
import "../styles/home.css";

function Home() {
  return (
    <div className="">
      <div className="p-10 mx-0">
        <div className="col">
            <h3 className="text-center">Minimalist Room</h3>
            <div className="row">
              <div className="col"></div>
              <div className="col text-center">
                <p>
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="col"></div>
            </div>
            <div className="col-12 w-100">
              <img className="img-fluid mx-auto" src={unsplash_77JACslA8G0} alt=""/>
            </div>
            <div className="row row-text">
              <div className="col-6">
                <h6>Project Overview</h6>
              </div>
              <div className="col-6"><h6>Design Process</h6></div>
            </div>
            <div className="row long-p">
              <div className="col-6">
                <p>
                  Online learning with us does not interfere with your daily life. 
                  because learning can be done anytime and anywhere. Online learning with 
                  us does not interfere with your daily life. because learning can be done 
                  anytime and anywhere. Online learning with us does not interfere with your 
                  daily life. because learning can be done anytime and anywhere. 
                </p>
              </div>
              <div className="col-6">
                <p>
                  Online learning with us does not interfere with your daily life. because 
                  learning can be done anytime and anywhere. Online learning with us does 
                  not interfere with your daily life. because learning can be done anytime 
                  and anywhere.
                </p>
                </div>
            </div>
            <div className="row down-p">
              <div className="col-6">
                <div className="row height-p">
                  <div className="col"><p>July 22 - 2022</p></div>
                  <div className="col"><p>Interior Design - Furnitur</p></div>
                </div>
              </div>
              <div className="col-6">
                <p>
                  Online learning with us does not interfere with your daily life. because 
                  learning can be done anytime and anywhere. Online learning with us does 
                  not interfere with your daily life. because learning can be done anytime 
                  and anywhere.
                </p>
                </div>
            </div>
            <div className="row">
              <div className='col-6'>
                <img className="img-fluid mx-auto" src={unsplash_7tFlUFGa7Dk} />
              </div>
              <div className='col-6'>
                <img className="img-fluid mx-auto" src={unsplash_sdRZrK4lVCk} />
                </div>
            </div>
            <div className="col-12 w-100 img-spacing">
              <img className="img-fluid mx-auto" src={unsplash_JIUjvqe2ZHg} alt=""/>
            </div>
            <div className="row">
              <div className='col-6'>
                <img className="img-fluid mx-auto" src={unsplash_dO3qTKxwik0} alt=""/>
              </div>
              <div className='col-6'>
                <img className="img-fluid mx-auto" src={unsplash_2_BZuGgkP4k} alt="" />
                </div>
            </div>
        </div>
      </div>

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

    </div>
  )
}

export default Home;
