
export const ImgType01= props =>{
    const {children, img, alt} = props;
    return(
        <figure>
            <img src={img} alt={alt} />
            <figcaption>{children}</figcaption>
        </figure>
    )
}