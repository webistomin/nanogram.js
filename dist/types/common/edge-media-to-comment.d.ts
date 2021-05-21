import { INodeOwner } from './node-owner';
export interface IEdgeMediaToComment {
    count?: number;
    edges?: IEdgeMediaToCommentNode[];
}
export interface IEdgeMediaToCommentNode {
    node: {
        id: string;
        text: string;
        created_at: number;
        did_report_as_spam: boolean;
        owner: INodeOwner;
        viewer_has_liked: boolean;
        edge_liked_by: IEdgeMediaToComment;
        is_restricted_pending: boolean;
    };
}
//# sourceMappingURL=edge-media-to-comment.d.ts.map