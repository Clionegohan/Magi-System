// リアルタイム時刻取得とフォーマット (HH:mm:ss固定)
import { useState, useEffect } from 'react';

interface UseTimeReturn {
    currentTime: Date;
    formattedTime: string;
}

const useTime = (): UseTimeReturn => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Tokyo'
    });

    return { currentTime, formattedTime };
};

export default useTime;
