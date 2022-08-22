export default function Title(props){
    return(
        <div className={`
        flex flex-col justify-center align-text-top
        `}>
            <h1 className={`
                font-semibold 
            `}>{props.children}</h1>
        </div>
    )
}