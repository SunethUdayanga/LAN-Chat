import BoardcastService from "../../services/Boardcast";

const CommonRoom: React.FC = () => {
    const runBordcast = () => {
        console.log("Running bordcast");
        BoardcastService();
    }
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Common Room</h1>
                        <p className="py-6">This is the common room page.</p>
                        <button className="btn btn-primary" onClick={runBordcast}>Run Bordcast</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonRoom;

