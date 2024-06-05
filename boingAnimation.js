amp_var = 10; //amp_var 변수의 값을 높이면 진폭이 강해진다.
freq_var = 70; //freq_var 변수의 수치를 높이면 진동이 강해진다.
decay_var = 200; //decay_var 변수의 수치를 높이면 애니메이션이 중단되는 속도가 빨라진다.

try {
   amp = amp_var / 2.5, freq = freq_var / 20, decay = decay_var / 20, n = 0, 0 < numKeys && (n = nearestKey(time) 
            .index, key(n)
            .time > time && n--), t = 0 === n ? 0 : time - key(n)
        .time, 0 < n ? (v = velocityAtTime(key(n)
            .time - thisComp.frameDuration / 10), value + v / 100 * amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t)) : value;
} catch (e$$4) {
    value = value; 
}