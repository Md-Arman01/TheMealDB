import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const errors = useRouteError()
    const navigate = useNavigate()
    const backBtn = () => {
        navigate(-1)
    }
    return (
        <div className="flex justify-center items-center h-screen"> 
        <div>
            <div className="flex flex-col items-center gap-3 justify-center my-5">
                <h1 className="text-5xl font-semibold ">Hey Md.Arman</h1>
                <h1 className="text-2xl font-medium ">Not Found This Page</h1>
            <button onClick={backBtn} className="btn text-white hover:bg-[#c52d2f] bg-[#ff5052]">back</button>

            </div>

            <div className="flex justify-center">

            {
                errors ? <img className="w-[1000px]" src="https://i.ibb.co/w4jsGsS/3747371.jpg" alt="" /> : ''
            }
            </div>

        </div>
        </div>
    );
};

export default Error;