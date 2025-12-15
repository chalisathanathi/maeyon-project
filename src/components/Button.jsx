export default function Button ({ children, onClick }) {
    return (
        <button onClick={onClick}
        className="bg-violet-300 px-6 py-3 rounded-lg text-white font-semibold text-md hover:bg-violet-800 transition duration-300 ease-in-out">
            {children}
        </button>
    );
}