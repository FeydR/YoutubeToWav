
# Youtube To Wav 

**Convert youtube videos, given a URL, into a .wav file**

**WARNING: This software requires the following**:

- Unix-like Environment (to support ffmpeg)
- Python3, along with third party dependency: pytube
- nodejs 

#### resources links
[ffmpeg for linux](https://phoenixnap.com/kb/install-ffmpeg-ubuntu)

[ffmpeg for mac](https://formulae.brew.sh/formula/ffmpeg)

[PyTube](https://pytube.io/en/latest/)

[NodeJS](https://nodejs.org/en/download/current)


## How to use
```
Inside Terminal:
pytube <YOUTUBE-VIDEO-URL>
    example: pytube: https://www.youtube.com/watch?v=07dr7T5l5AI

This will output an mp4 video file from whereever you invoked the command.

Then plug in the file input name and file output name into index.ts

Compile it(using tsc), then run it (using 'npm start')

```

FeydR 2023
