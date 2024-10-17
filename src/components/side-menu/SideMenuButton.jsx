function SideMenuButton({ children, text, sectionID, sendDataToSideMenu }) {

    function handleClick() {
        sendDataToSideMenu(sectionID);
    }

    return (
        <>
            <button className='flex flex-nowrap justify-start py-3 items-center group transition duration-fast overflow-hidden' onClick={handleClick}>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap">{text}</span>
            </button>
        </>
    );
}

export default SideMenuButton;