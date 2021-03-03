import {Injectable} from '@angular/core';
import AgoraRTC, {AREAS, IAgoraRTCClient} from 'agora-rtc-sdk-ng';
import {CurrentChannel} from '../resources/channel-resource.service';
import {AGORA_KEY} from '../core/api.config';

@Injectable({
  providedIn: 'root'
})
export class AgoraService {

  // client: IAgoraRTCClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  client: IAgoraRTCClient;
  constructor() {

    AgoraRTC.setArea([AREAS.EUROPE]);
    this.client = AgoraRTC.createClient({
      mode: 'rtc',
      codec: 'vp8',
      httpRetryConfig: {
        maxRetryCount: 3,
        maxRetryTimeout: 1000,
        timeout: 1000,
        timeoutFactor: 2
      },
      websocketRetryConfig: {
        maxRetryCount: 3,
        maxRetryTimeout: 1000,
        timeout: 1000,
        timeoutFactor: 2
      }
    });
    // this.client.
  }

  joinChannel(channel: CurrentChannel): any {
    // this.client.enableAudioVolumeIndicator();
    // this.client.disableDualStream().then(() => {

      return this.client.join(AGORA_KEY, channel.channel, channel.token, parseFloat(localStorage.getItem('user_id')));
    // });
    // this.client.mu
    // this.client.setClientRole('audience', {
    //   level: AudienceLatencyLevelType.AUDIENCE_LEVEL_LOW_LATENCY
    // }).then( () => {
    // });
  }

}
