import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const nagvigate = useNavigate();
  const handleHomePage = () =>{
    nagvigate("/");
  }
  return (
    <div className='text-center'>
      <img src="https://cdn.svgator.com/images/2024/04/animated-3D-404-not-found-page-error.gif" alt=""  width={600}/>
      <br />
      <h2 className="mb-3 font-poppins">🪬Page Not Found</h2>
      <button onClick={handleHomePage} className='btn bg-blue-700 text-light px-3 fs-3 font-poppins'>Go Back</button>
    </div>
  )
}

export default PageNotFound