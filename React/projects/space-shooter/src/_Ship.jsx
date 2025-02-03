
function Ship() {
    // Main
    const _ship = '../src/assets/ship.png?v2';
    const _bullet = '../src/assets/bullet.png';

    return (
        <>
            <img className="_ship" src={_ship} />
            <img className="_bullet" src={_bullet} />
        </>
    )
}

export default Ship