
export const H3Title = (props)=>{
    const {children, addClass} = props;
    return(
        <h1 className={addClass}>{children}</h1>
    )
}