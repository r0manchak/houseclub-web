import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelResourceService {

  constructor(
    private http: HttpClient
  ) { }

  getChannels(): Observable<Channels> {
    return this.http.get<Channels>('get_channels');
  }

  joinChannel(channelName: string): Observable<CurrentChannel> {
    return this.http.post<CurrentChannel>('join_channel', {
      channel: channelName,
      attribution_source: 'feed',
      attribution_details: 'eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0='
    });
  }
}


export interface ChannelUser {
    user_id: number;
    name: string;
    photo_url: string;
    is_speaker: boolean;
    is_moderator: boolean;
    time_joined_as_speaker?: Date;
    is_followed_by_speaker: boolean;
    is_invited_as_speaker: boolean;
  }

export interface Channel {
    creator_user_profile_id: number;
    channel_id: number;
    channel: string;
    topic: string;
    is_private: boolean;
    is_social_mode: boolean;
    url: string;
    feature_flags: string[];
    club?: any;
    club_name?: any;
    club_id?: any;
    welcome_for_user_profile?: any;
    num_other: number;
    has_blocked_speakers: boolean;
    is_explore_channel: boolean;
    num_speakers: number;
    num_all: number;
    users: ChannelUser[];
  }

export interface EventHost {
    user_id: number;
    name: string;
    photo_url: string;
    username: string;
    bio: string;
    twitter: string;
  }

export interface Event {
    event_id: number;
    name: string;
    description: string;
    time_start: Date;
    club?: any;
    is_member_only: boolean;
    url: string;
    hosts: EventHost[];
    channel?: any;
    is_expired: boolean;
  }

export interface Channels {
    channels: Channel[];
    events: Event[];
    success: boolean;
  }



export interface ChannelUser {
  user_id: number;
  name: string;
  photo_url: string;
  username: string;
  first_name: string;
  skintone: number;
  is_new: boolean;
  is_speaker: boolean;
  is_moderator: boolean;
  time_joined_as_speaker?: Date;
  is_followed_by_speaker: boolean;
  is_invited_as_speaker: boolean;
}

export interface CurrentChannel {
  creator_user_profile_id: number;
  channel_id: number;
  channel: string;
  topic: string;
  is_private: boolean;
  is_social_mode: boolean;
  url: string;
  feature_flags: string[];
  club?: any;
  club_name?: any;
  club_id?: any;
  welcome_for_user_profile?: any;
  is_handraise_enabled: boolean;
  handraise_permission: number;
  is_club_member: boolean;
  is_club_admin: boolean;
  users: ChannelUser[];
  success: boolean;
  is_empty: boolean;
  token: string;
  rtm_token: string;
  pubnub_token: string;
  pubnub_origin?: any;
  pubnub_heartbeat_value: number;
  pubnub_heartbeat_interval: number;
  pubnub_enable: boolean;
  agora_native_mute: boolean;
}


