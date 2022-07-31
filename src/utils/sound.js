import clap from '../sound/clap.wav';
export default function sound(){
    const audio = new Audio(clap);
    audio.volume = 0.075;
    audio.play();
    }