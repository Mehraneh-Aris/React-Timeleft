const formatTime = (secends) => {
    const m = Math.floor (secends / 60).toString().padStart(2, '0');
    const s = (secends % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

export default formatTime;