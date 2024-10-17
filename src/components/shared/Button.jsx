function Button({label, color, onClick}) {
    return (
        <>
            <button className={`${color} px-2 py-2 rounded-full shadow-sm shadow-gray-400 text-sm font-bold w-fit min-w-16`} onClick={onClick}>{label}</button>
        </>
    )
}

export default Button;