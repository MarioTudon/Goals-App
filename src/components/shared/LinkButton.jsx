function LinkButton({ children, text, href, imgSrc, imgAlt }) {
    return (
        <>
            <a href={href} className='flex'>
                <img src={imgSrc} alt={imgAlt} />
                {text}
            </a>
        </>
    );
}

export default LinkButton;