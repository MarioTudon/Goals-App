function Button({ label, styles, onClick }) {
    return (
        <>
            <button className={`${styles} px-2 py-2 rounded-full shadow-sm shadow-gray-400 text-sm font-bold w-fit min-w-16 h-8 flex items-center justify-center`} onClick={onClick}>{label}</button>
        </>
    )
}

export default Button;