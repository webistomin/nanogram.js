import { IEdgeOwnerToTimelineMedia } from './edge-owner-to-timeline-media';
import { IEdgeFollowedBy } from './edge-followed-by';
export interface INodeOwner {
    id: string;
    is_verified?: boolean;
    profile_pic_url?: string;
    username?: string;
    full_name?: string;
    blocked_by_viewer?: boolean;
    restricted_by_viewer?: boolean;
    followed_by_viewer?: boolean;
    has_blocked_viewer?: boolean;
    is_private?: boolean;
    is_unpublished?: boolean;
    requested_by_viewer?: boolean;
    pass_tiering_recommendation?: boolean;
    edge_owner_to_timeline_media?: IEdgeOwnerToTimelineMedia;
    edge_followed_by?: IEdgeFollowedBy;
}
//# sourceMappingURL=node-owner.d.ts.map