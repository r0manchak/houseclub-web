import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Channel, ChannelResourceService, Channels} from '../resources/channel-resource.service';
import {tap} from 'rxjs/operators';
import {AgoraService} from './agora.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public channels$: Observable<Channels> = this.channelResourceService.getChannels().pipe(
    tap(val => console.log('rooms', val))
  );

  constructor(
    private channelResourceService: ChannelResourceService,
    private agoraService: AgoraService
  ) { }

  ngOnInit(): void {
  }

  onJoinClick(channel: Channel) {
    this.channelResourceService.joinChannel(channel.channel).subscribe(currentChannel => {
      this.agoraService.joinChannel(currentChannel);
      // console.log('join-res', currentChannel);
    });
    // console.log('channe', channel);
  }

}
