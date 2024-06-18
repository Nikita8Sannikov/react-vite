import classes from './Button.module.css'

console.log(classes);

export default function Button({children, onClick, isActive}) {
    // let classes = 'button'

    // if(isActive) classes += ' active'

    return( 
    <button className={isActive ? `${classes.button} ${classes.active}`: classes.button} onClick={onClick}>
    {/* <button className={isActive ? 'button active': 'button'} onClick={onClick}> */}
    {/*  <button className={classes} onClick={onClick}> */}
        {children}
        </button>
    )
}