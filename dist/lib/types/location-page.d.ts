import { IThumbnail } from './common/thumbnail';
export interface ILocationResponse {
    entry_data: {
        LocationPage: ILocation[];
    };
}
export interface ILocation {
    graphql: {
        id: string;
        name: string;
        has_public_page: boolean;
        lat: number;
        lng: number;
        slug: string;
        blurb: string;
        website: URL;
        phone: string;
        primary_alias_on_fb: string;
        address_json: JSON;
        profile_pic_url: string;
        edge_location_to_media: {
            count: number;
            page_info: {
                has_next_page: boolean;
                end_cursor: string;
            };
            edges: ILocationContent[];
        };
    };
    logging_page_id: string;
    photos_and_videos_header: boolean;
    recent_pictures_and_videos_subheader: boolean;
    top_images_and_videos_subheader: boolean;
}
export interface ILocationContent {
    node: {
        comments_disabled: boolean;
        id: string;
        edge_media_to_caption: IMediaToCaption[];
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
    };
}
export interface IMediaToCaption {
    node: {
        text: string;
    };
}
//# sourceMappingURL=location-page.d.ts.map