import { useState, useEffect } from 'react'

// Live countdown timer — used by DealsPage flash sale
function useCountdown() {
    const [time, setTime] = useState({ h: 11, m: 42, s: 37 });
    useEffect(() => {
        const t = setInterval(() => {
            setTime(prev => {
                let { h, m, s } = prev;
                s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; } if (h < 0) { h = 23; }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(t);
    }, []);
    return time;
}

export { useCountdown }
