soundPool = (settings, repeat) => {
    let index = 0;
    const sounds = [...Array(10)].map(() => {
        const sound = jsfxr(settings);
        sound.loop = repeat;
        return sound;
    });
    return once(() => {
        const sound = sounds[index++ % sounds.length];
        sound.play();
        return sound;
    });
};

const explosionSound = soundPool([3,,0.3346,0.2953,0.4941,0.1205,,-0.2565,,,,,,,,,-0.1093,-0.2344,1,,,,,0.5]),
    shootSound = soundPool([0,,0.1584,0.1384,0.2216,0.63,,-0.2653,,,,,,0.1485,,,,,1,,,0.1888,,0.5]),
    promptSound = soundPool([1,0.12,0.1,0.0079,0.32,0.83,0.0017,,0.04,0.34,0.96,0.0056,,,0.8422,0.0048,,-0.0327,1,,,,,0.37]),
    selectSound = soundPool([0,,0.1696,,0.0103,0.2617,,,,,,,,0.1416,,,,,1,,,0.1,,0.5]),
    pickupSound = soundPool([0,,0.0323,0.3656,0.1925,0.4276,,,,,,,,,,,,,1,,,,,0.5]),
    hitSound = soundPool([3,,0.0825,,0.2264,0.3697,,-0.5926,,,,,,,,,,,1,,,0.0684,,0.5]),
    thrustSound = soundPool([3,,1,,,0.14,,,,,,,,,,1,,,1,,,0.0684,,0.33], true),
    introSound = soundPool([2,1,0.01,0.0079,1,0.23,0.0017,0.0194,0.0078,0.81,0.41,0.0056,,,0.8422,0.0048,,-0.0327,1,,,,,0.45]),
    findSytemSound = soundPool([2,0.72,0.01,0.0079,1,0.6,0.0017,0.0194,0.0078,0.57,0.71,0.0056,,,0.8422,0.0048,,-0.0327,1,,,,,0.45]),
    warningSound = soundPool([1,0.03,0.42,0.0079,0.32,0.14,0.0017,,0.04,,,0.0056,,,0.8422,0.0048,,-0.0327,1,,,,,0.37]);