import "./bg.less";

const Background = () => {
    return (
        <div className="bg-gradient-wrap fixed -z-10 flex justify-center items-center w-screen h-screen">
            <div className="bg-gradient -z-10"></div>
        </div>
    );
};

export default Background;