import { IThumbnail } from './thumbnail';
import { IDimensions } from './dimensions';
import { INodeOwner } from './node-owner';
import { IEdgeLikedBy } from './edge-liked-by';
import { IEdgeMediaPreviewLike } from './edge-media-preview-like';
import { ILocation } from './location';
import { IEdgeMediaToCaption } from './edge-media-to-caption';
import { IEdgeMediaToComment } from './edge-media-to-comment';
import { IEdgeSidecarToChildren } from './edge-sidecar-to-children';
import { IEdgeMediaToTaggedUser } from './edge-media-to-tagged-user';
import { ISharingFrictionInfo } from './sharing-friction-info';
import { IDashInfo } from './dash-info';
export interface IEdgeOwnerToTimelineMedia {
    count?: number;
    page_info?: {
        has_next_page: boolean;
        end_cursor: string | null;
    };
    edges?: IEdgeOwnerToTimelineMediaNode[];
}
export interface IEdgeOwnerToTimelineMediaNode {
    node: {
        __typename: string;
        id: string;
        shortcode: string;
        dimensions: IDimensions;
        display_url: string;
        gating_info: string;
        fact_check_overall_rating: null;
        fact_check_information: null;
        media_preview: string;
        owner: INodeOwner;
        is_video: boolean;
        accessibility_caption: string;
        comments_disabled: boolean;
        taken_at_timestamp: DOMTimeStamp;
        edge_liked_by: IEdgeLikedBy;
        edge_media_preview_like: IEdgeMediaPreviewLike;
        edge_media_to_tagged_user: IEdgeMediaToTaggedUser;
        sharing_friction_info?: ISharingFrictionInfo;
        media_overlay_info?: unknown;
        dash_info?: IDashInfo;
        has_audio?: boolean;
        tracking_token?: string;
        video_url?: string;
        location: ILocation | null;
        thumbnail_src: string;
        thumbnail_resources: IThumbnail[];
        edge_media_to_caption: IEdgeMediaToCaption;
        edge_media_to_comment: IEdgeMediaToComment;
        edge_sidecar_to_children?: IEdgeSidecarToChildren;
        felix_profile_grid_crop?: {
            crop_left: number;
            crop_right: number;
            crop_top: number;
            crop_bottom: number;
        };
        video_view_count?: number;
        product_type?: string;
    };
}
//# sourceMappingURL=edge-owner-to-timeline-media.d.ts.map