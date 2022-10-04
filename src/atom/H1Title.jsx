
export const H1Title = (props)=>{
    const {children, addClass} = props;
    return(
        <h1 className={addClass}>{children}</h1>
    )
}