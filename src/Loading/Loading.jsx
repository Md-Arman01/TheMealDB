import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
    return (
        <div className="flex justify-center  h-screen pt-60">
            
            <FadeLoader color="#23180d" />
        </div>
    );
};

export default Loading;