export interface IDashInfo {
  is_dash_eligible: boolean;
  video_dash_manifest: string | null;
  number_of_qualities: number;
}
