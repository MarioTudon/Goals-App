function SideMenuButton({ children, text, sectionID, sendDataToSideMenu, ...props }) {

    function handleClick() {
        sendDataToSideMenu(sectionID);
    }

    return (
        <>
            <button className='flex flex-nowrap justify-start py-3 items-center group transition duration-medium overflow-hidden lg:hover:bg-gray-300 group lg:selected:bg-gray-300 lg:focus:outline-none' onClick={handleClick} {...props}>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap lg:group-hover:scale-110 transition duration-medium">{text}</span>
            </button>
        </>
    );
}

export default SideMenuButton;