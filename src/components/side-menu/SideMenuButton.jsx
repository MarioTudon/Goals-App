function SideMenuButton({ children, text, id, sendDataToSideMenu }) {

    function handleClick() {
        sendDataToSideMenu(id);
    }

    return (
        <>
            <button className='flex flex-nowrap justify-start py-3 items-center md:hover:bg-gray-300 group transition duration-fast overflow-hidden' onClick={handleClick}>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap">{text}</span>
            </button>
        </>
    );
}

export default SideMenuButton;