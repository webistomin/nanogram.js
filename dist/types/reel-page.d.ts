import { IDashInfo } from './common/dash-info';
import { IDimensions } from './common/dimensions';
import { IThumbnail } from './common/thumbnail';
import { IEdgeMediaToComment } from './common/edge-media-to-comment';
import { IEdgeMediaPreviewLike } from './common/edge-media-preview-like';
import { IEdgeMediaToCaption } from './common/edge-media-to-caption';
import { IEdgeMediaToHoistedComment } from './common/edge-media-to-hoisted-comment';
import { IEdgeMediaToParentComment } from './common/edge-media-to-parent-comment';
import { IEdgeMediaToTaggedUser } from './common/edge-media-to-tagged-user';
import { IEdgeRelatedProfiles } from './common/edge-related-profiles';
import { ILocation } from './common/location';
import { INodeOwner } from './common/node-owner';
import { ISharingFrictionInfo } from './common/sharing-friction-info';
export interface IReelResponse {
    entry_data: {
        PostPage: IReelContent[];
    };
}
export interface IReelContent {
    graphql: {
        shortcode_media: {
            accessibility_caption?: string | null;
            caption_is_edited: boolean;
            clips_music_attribution_info: unknown;
            commenting_disabled_for_viewer: boolean;
            comments_disabled: boolean;
            dash_info: IDashInfo;
            dimensions: IDimensions;
            display_resources: IThumbnail[];
            display_url: string;
            edge_media_preview_comment?: IEdgeMediaToComment;
            edge_media_preview_like?: IEdgeMediaPreviewLike;
            edge_media_to_caption?: IEdgeMediaToCaption;
            edge_media_to_hoisted_comment?: IEdgeMediaToHoistedComment;
            edge_media_to_parent_comment?: IEdgeMediaToParentComment;
            edge_media_to_sponsor_user?: unknown;
            edge_media_to_tagged_user?: IEdgeMediaToTaggedUser;
            edge_related_profiles?: IEdgeRelatedProfiles;
            edge_web_media_to_related_media?: IEdgeMediaToCaption;
            encoding_status: unknown;
            fact_check_information: unknown;
            fact_check_overall_rating: unknown;
            gating_info: unknown;
            has_audio: boolean;
            has_ranked_comments: boolean;
            id: string;
            is_ad: boolean;
            is_published: boolean;
            is_video: boolean;
            location: ILocation | null;
            media_overlay_info: unknown;
            media_preview: string;
            owner: INodeOwner;
            product_type: string;
            sensitivity_friction_info: unknown;
            sharing_friction_info: ISharingFrictionInfo;
            shortcode: string;
            taken_at_timestamp: DOMTimeStamp;
            thumbnail_src: string;
            title: string;
            tracking_token: string;
            video_duration: number;
            video_play_count: number;
            video_url: string;
            video_view_count: number;
            viewer_can_reshare: boolean;
            viewer_has_liked: boolean;
            viewer_has_saved: boolean;
            viewer_has_saved_to_collection: boolean;
            viewer_in_photo_of_you: boolean;
            __typename: string;
        };
    };
}
export interface IReelResult {
    reel: IReelContent['graphql']['shortcode_media'];
}
//# sourceMappingURL=reel-page.d.ts.map