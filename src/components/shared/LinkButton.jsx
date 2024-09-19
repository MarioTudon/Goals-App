function LinkButton({ children, text, href, imgSrc, imgAlt }) {
    return (
        <>
            <a href={href} className='flex pt-4 items-center'>
                <img src={imgSrc} alt={imgAlt} className="w-6 h-6 ml-4 mr-3"/>
                <span className="align-middle">{text}</span>
            </a>
        </>
    );
}

export default LinkButton;