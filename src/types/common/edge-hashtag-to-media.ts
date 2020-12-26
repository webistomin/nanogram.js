import { IThumbnail } from './thumbnail';
import { IEdgeMediaToCaption } from './edge-media-to-caption';
import { IEdgeMediaToComment } from './edge-media-to-comment';
import { IDimensions } from './dimensions';
import { IEdgeLikedBy } from './edge-liked-by';
import { IEdgeMediaPreviewLike } from './edge-media-preview-like';
import { INodeOwner } from './node-owner';

export interface IEdgeHashtagToMedia {
  count?: number;
  page_info?: {
    has_next_page: boolean;
    end_cursor: string | null;
  };
  edges?: IEdgeHashtagToMediaNode[];
}

export interface IEdgeHashtagToMediaNode {
  node: {
    comments_disabled?: boolean;
    __typename: string;
    id: string;
    edge_media_to_caption: IEdgeMediaToCaption;
    shortcode: string;
    edge_media_to_comment: IEdgeMediaToComment;
    taken_at_timestamp: DOMTimeStamp;
    dimensions: IDimensions;
    display_url: string;
    edge_liked_by: IEdgeLikedBy;
    edge_media_preview_like: IEdgeMediaPreviewLike;
    owner: INodeOwner;
    thumbnail_src: string;
    thumbnail_resources: IThumbnail[];
    is_video: boolean;
    product_type?: string;
    accessibility_caption: string;
    video_view_count?: number;
  };
}
