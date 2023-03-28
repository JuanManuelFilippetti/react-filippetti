const Button = (props) => {
    return <button onClick={props.callBack} style={{backgroundColor: 'red', color:'white'}}>{props.label}</button>
}

export default Button