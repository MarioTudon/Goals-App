function LinkButton({ children,text, href, imgSrc, imgAlt }) {
    return (
        <>
            <a href={href} className='flex py-3 items-center hover:bg-gray-300 group transition duration-fast overflow-hidden'>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap">{text}</span>
            </a>
        </>
    );
}

export default LinkButton;