// import img from '../images/istockphoto-1315139408-612x612.jpg';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const redirectToHome = () => {
    // Redirect to the Register route
    navigate("/Home");
  };
  return (
    <div className='container-fluid' id="Welcome" >
        <div className="col-12">
            {/* You can keep this div empty or add other content as needed */}
            <h1 id='h1w'>
               Welcome To  Job Portal
            </h1>

        </div>
        <br></br>

        <div className='' id='startb'>
            <button className='btn btn-primary lg-2 ' id='sb' onClick={redirectToHome}>Click Here For Your feature </button>
        </div>


    </div>
  );
}

export default Welcome;