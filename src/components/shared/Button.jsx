function Button({label, color, onClick}) {
    return (
        <>
            <button className={`${color} px-2 py-1 rounded-full shadow-sm shadow-gray-400 text-sm font-bold`} onClick={onClick}>{label}</button>
        </>
    )
}

export default Button;