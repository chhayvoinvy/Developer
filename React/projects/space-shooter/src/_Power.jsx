function Power() {
    // Power
    const _booster_active = '../src/assets/booster_activated.png?v2';
    const _booster = '../src/assets/booster.png';
    const _blink = '../src/assets/blink.png';

    return (
        <>
            <img className="_booster_active" src={_booster_active} />
            <img className="_booster" src={_booster} />
            <img className="_blink" src={_blink} />

        </>
    )
}

export default Power