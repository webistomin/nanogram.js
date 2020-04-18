import { IThumbnail } from './common/thumbnail';
export interface ITagsResponse {
    entry_data: {
        TagPage: ITags[];
    };
}
export interface ITags {
    graphql: {
        hashtag: {
            id: string;
            name: string;
            allow_following: boolean;
            description: string;
            is_following: boolean;
            is_top_media_only: boolean;
            profile_pic_url: string;
            edge_hashtag_to_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string;
                };
                edges: IHashtagContent[];
            };
            edge_hashtag_to_top_posts: {
                edges: IHashtagContent[];
            };
            edge_hashtag_to_content_advisory: {
                count: number;
                edges: IHashtagContent[];
            };
            edge_hashtag_to_related_tags: {
                edges: ITagContent[];
            };
        };
    };
}
export interface IHashtagContent {
    node: {
        comments_disabled: boolean;
        __typename: string;
        id: string;
        edge_media_to_caption: {
            edges: IMediaToCaption[];
        };
        shortcode: string;
        edge_media_to_comment: {
            count: number;
        };
        taken_at_timestamp: DOMTimeStamp;
        dimensions: {
            width: number;
            height: number;
        };
        display_url: string;
        edge_liked_by: {
            count: number;
        };
        edge_media_preview_like: {
            count: number;
        };
        owner: {
            id: string;
        };
        thumbnail_src: string;
        thumbnail_resources: IThumbnail[];
        is_video: boolean;
        accessibility_caption: string;
    };
}
export interface IMediaToCaption {
    node: {
        text: string;
    };
}
export interface ITagContent {
    node: {
        name: string;
    };
}
//# sourceMappingURL=tags-page.d.ts.map