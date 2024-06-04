import { AudioTrack as TAudioTrack } from "../api/audioTrack/AudioTrack";

export const AUDIOTRACK_TITLE_FIELD = "id";

export const AudioTrackTitle = (record: TAudioTrack): string => {
  return record.id?.toString() || String(record.id);
};
