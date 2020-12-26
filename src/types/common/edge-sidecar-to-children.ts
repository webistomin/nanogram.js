import { IEdgeMediaToTaggedUser } from './edge-media-to-tagged-user';
import { IDimensions } from './dimensions';
import { IThumbnail } from './thumbnail';
import { ISharingFrictionInfo } from './sharing-friction-info';
import { INodeOwner } from './node-owner';
import { IGatingInfo } from './gating-info';
import { IDashInfo } from './dash-info';

export interface IEdgeSidecarToChildren {
  edges?: IEdgeSidecarToChildrenNode[];
}

export interface IEdgeSidecarToChildrenNode {
  node: {
    __typename: string;
    id: string;
    shortcode?: string;
    dimensions: IDimensions;
    gating_info?: IGatingInfo | null;
    fact_check_overall_rating?: unknown;
    fact_check_information?: unknown;
    sensitivity_friction_info?: unknown;
    sharing_friction_info?: ISharingFrictionInfo;
    media_overlay_info?: unknown;
    media_preview?: string | null;
    display_url: string;
    display_resources?: IThumbnail[];
    accessibility_caption?: string | null;
    is_video: boolean;
    video_url?: string;
    tracking_token?: string;
    edge_media_to_tagged_user: IEdgeMediaToTaggedUser;
    owner: INodeOwner;
    dash_info?: IDashInfo;
    has_audio?: boolean;
    video_view_count?: number;
  };
}
