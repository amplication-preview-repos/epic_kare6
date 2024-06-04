import * as graphql from "@nestjs/graphql";
import { AudioTrackResolverBase } from "./base/audioTrack.resolver.base";
import { AudioTrack } from "./base/AudioTrack";
import { AudioTrackService } from "./audioTrack.service";

@graphql.Resolver(() => AudioTrack)
export class AudioTrackResolver extends AudioTrackResolverBase {
  constructor(protected readonly service: AudioTrackService) {
    super(service);
  }
}
