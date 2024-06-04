import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioTrackService } from "./audioTrack.service";
import { AudioTrackControllerBase } from "./base/audioTrack.controller.base";

@swagger.ApiTags("audioTracks")
@common.Controller("audioTracks")
export class AudioTrackController extends AudioTrackControllerBase {
  constructor(protected readonly service: AudioTrackService) {
    super(service);
  }
}
