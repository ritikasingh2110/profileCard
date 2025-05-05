import "./Brief.css"

export default function Brief(props){
    const {name,status}=props
    return (
        <>
            <div className="whole">
            <h1 className="first">{name}</h1>
            <p className="second">{status}</p>
            <button className="third">Follow</button>
            </div>
        </>
    )
}