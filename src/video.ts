import YQ from './yq/yq';
import { YQRect } from './yq/yq';
export default class Video {
    video: HTMLVideoElement;

    constructor() {
        this.video = document.getElementById('bgvideo') as HTMLVideoElement;
        this.video.playbackRate = 0.5;
        this.windowResize();
    }

    windowResize() {
        const videoSize: YQRect = YQ.sizeFill(this.video.width, this.video.height);
        const px = 'px';
        this.video.style.left = videoSize.x + px;
        this.video.style.top = videoSize.y + px;
        this.video.style.width = videoSize.width + px;
        this.video.style.height = videoSize.height + px;
    }
}