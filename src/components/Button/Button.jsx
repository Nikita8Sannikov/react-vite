import './Button.css'

export default function Button({children, onClick, isActive}) {
    let classes = 'button'

    if(isActive) classes += ' active'

    return( 
    <button className={isActive ? 'button active': 'button'} onClick={onClick}>
    {/*  <button className={classes} onClick={onClick}> */}
        {children}
        </button>
    )
}