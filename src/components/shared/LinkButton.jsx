function LinkButton({ children, text, href, imgSrc, imgAlt }) {
    return (
        <>
            <a href={href} className='flex py-3 items-center hover:bg-gray-200 transition duration-200'>
                <img src={imgSrc} alt={imgAlt} className="w-6 h-6 ml-4 mr-3"/>
                <span className="align-middle text-gray-700 text-base font-bold">{text}</span>
            </a>
        </>
    );
}

export default LinkButton;