import styles from './Button.module.css'

function Button(props) {

    let btn_more = "Show less";

    const clickHander = () => console.log({btn_more});

    return(
        <>

        <button onClick={clickHander} className={styles.button}>{props.btn_more}</button>
        
        </>
    );
}

export default Button