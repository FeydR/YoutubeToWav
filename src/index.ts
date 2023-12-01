import Ffmpeg from "fluent-ffmpeg";


Ffmpeg()
    .input("lightningStrikes.mp4")
    .output("lightningStrikes.wav")
    .run();
