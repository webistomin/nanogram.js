import { IThumbnail } from './common/thumbnail';
export interface IUserProfileResponse {
    entry_data: {
        ProfilePage: IUserProfileContent[];
    };
}
export interface IUserProfileContent {
    logging_page_id: string;
    show_suggested_profiles: boolean;
    show_follow_dialog: boolean;
    graphql: {
        user: {
            biography: string;
            blocked_by_viewer: boolean;
            restricted_by_viewer: null;
            country_block: boolean;
            external_url: URL;
            external_url_linkshimmed: URL;
            edge_followed_by: {
                count: number;
            };
            followed_by_viewer: boolean;
            edge_follow: {
                count: number;
            };
            follows_viewer: boolean;
            full_name: string;
            id: string;
            is_business_account: boolean;
            is_joined_recently: boolean;
            business_category_name: string;
            category_id: string;
            overall_category_name: string | null;
            is_private: boolean;
            is_verified: boolean;
            edge_mutual_followed_by: {
                count: number;
            };
            profile_pic_url: string;
            profile_pic_url_hd: string;
            requested_by_viewer: boolean;
            username: boolean;
            connected_fb_page: URL | null;
            edge_owner_to_timeline_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                    edges: IUserProfileImage[];
                };
            };
        };
    };
    toast_content_on_load: null;
}
export interface IUserProfileImage {
    id: string;
    shortcode: string;
    dimensions: {
        height: number;
        width: number;
    };
    display_url: string;
    gating_info: string;
    fact_check_overall_rating: null;
    fact_check_information: null;
    media_preview: string;
    owner: {
        id: string;
        username: string;
    };
    is_video: boolean;
    accessibility_caption: string;
    comments_disabled: boolean;
    taken_at_timestamp: DOMTimeStamp;
    edge_liked_by: {
        count: number;
    };
    edge_media_preview_like: {
        count: number;
    };
    location: string | null;
    thumbnail_src: string;
    thumbnail_resources: IThumbnail[];
}
export interface IUserProfileResult {
    profile: IUserProfileContent['graphql']['user'] | null;
}
export interface IUserProfileResult {
    profile: IUserProfileContent['graphql']['user'] | null;
}
