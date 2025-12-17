export default function Button ({ children, onClick }) {
    return (
        <button onClick={onClick}
        className="bg-orange-200 px-6 py-3 rounded-lg text-white font-semibold text-md hover:bg-orange-900 transition duration-300 ease-in-out">
            {children}
        </button>
    );
}