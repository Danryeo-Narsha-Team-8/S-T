import React, { useEffect, useState } from 'react'
import * as S from '../Clock/Clock.style'

const Clock = () => {
    const nowTime = () => {
        let now = new Date();
        let hour = String(now.getHours()).padStart(2, "0");
        let minute = String(now.getMinutes()).padStart(2, "0");
        return `${hour}:${minute}`
    };
    const nowDate = () => {
        let now = new Date();
        let year = String(now.getFullYear()).padStart(2, "0");
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let date = String(now.getDate()).padStart(2, "0");
        return `${year}/${month}/${date}`
    };

    const [time, setTime] = useState(nowTime)
    const [date, setDate] = useState(nowDate)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(nowTime());
            setDate(nowDate());
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <S.Clock>
            <h1>{time}</h1>
            <div>{date}</div>
        </S.Clock>
    )
}

export default Clock
