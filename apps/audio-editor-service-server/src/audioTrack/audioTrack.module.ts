import { Module } from "@nestjs/common";
import { AudioTrackModuleBase } from "./base/audioTrack.module.base";
import { AudioTrackService } from "./audioTrack.service";
import { AudioTrackController } from "./audioTrack.controller";
import { AudioTrackResolver } from "./audioTrack.resolver";

@Module({
  imports: [AudioTrackModuleBase],
  controllers: [AudioTrackController],
  providers: [AudioTrackService, AudioTrackResolver],
  exports: [AudioTrackService],
})
export class AudioTrackModule {}
