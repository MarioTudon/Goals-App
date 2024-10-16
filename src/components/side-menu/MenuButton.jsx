function MenuButton({ children,text, href, imgSrc, imgAlt }) {

    function openLink(){
        window.open("/Goals-App", "_self")
    }
    return (
        <>
            <button className='flex flex-nowrap justify-start py-3 items-center md:hover:bg-gray-300 group transition duration-fast overflow-hidden' onClick={openLink}>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap">{text}</span>
            </button>
        </>
    );
}

export default MenuButton;