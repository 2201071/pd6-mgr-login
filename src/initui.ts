import YQ from './yq/yq';
import Video from './video';
import mdui from 'mdui';

export default class InitUI {
    video: Video;

    constructor() {
        this.meta();
        this.video = new Video();
        mdui.mutation();
    }

    windowResize() {
        this.video.windowResize();
    }

    meta() {
        this.addMeta('description', this.getMeta('abstract')+' '+this.getMeta('keywords'));
        this.addMeta('title', document.title);
        this.addMeta('u.cookie', navigator.cookieEnabled.toString());
        this.addMeta('u.track', navigator.doNotTrack ?? '');
        this.addMeta('u.hc', navigator.hardwareConcurrency.toString());
        this.addMeta('u.touch', navigator.maxTouchPoints.toString());
        this.addMeta('u.online', navigator.onLine.toString());
        this.addMeta('u.driver', navigator.webdriver.toString());
        this.addMeta('u.lang', navigator.language);
        this.addMeta('u.langs', navigator.languages.join(', '));
        this.addMeta('u.vendor', navigator.vendor);
        this.addMeta('u.ua', navigator.userAgent);
        YQ.divById('footer').innerHTML += this.getMeta('copyright');
        YQ.divById('title1').innerText = this.getMeta('abstract');
        YQ.divById('title2').innerText = this.getMeta('keywords');
        const logo:HTMLImageElement = document.getElementById('logo') as HTMLImageElement;
        logo.src = this.getMeta('image');
    }

    addMeta(name: string, content: string) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    getMeta(name: string):string {
        const metas = document.getElementsByTagName('meta');
        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === name) {
                return metas[i].getAttribute('content') ?? '';
            }
        }
        return '';
    }
}