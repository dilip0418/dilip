import LoaderText from "./LoaderText";

const StrokeTextLoader = () => {
    return (
        <div
            className="fixed inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center z-50"
            role="status"
            aria-label="Loading..."
        >
            <LoaderText />
        </div>
    );
};

export default StrokeTextLoader;
