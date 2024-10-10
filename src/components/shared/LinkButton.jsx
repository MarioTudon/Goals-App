function LinkButton({ children,text, href, imgSrc, imgAlt }) {
    return (
        <>
            <a href={href} className='flex flex-nowrap justify-start py-3 items-center md:hover:bg-gray-300 group transition duration-fast overflow-hidden'>
                {children}
                <span className="align-middle text-gray-700 text-base font-bold text-nowrap">{text}</span>
            </a>
        </>
    );
}

export default LinkButton;