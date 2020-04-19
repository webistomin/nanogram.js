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
            external_url: string;
            external_url_linkshimmed: string;
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
                edges: any;
            };
            profile_pic_url: string;
            profile_pic_url_hd: string;
            requested_by_viewer: boolean;
            username: string;
            connected_fb_page: URL | null;
            edge_owner_to_timeline_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: IUserProfileImage[];
            };
            edge_saved_media?: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: any;
            };
            edge_media_collections?: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: any;
            };
            has_ar_effects?: boolean;
            has_channel?: boolean;
            has_blocked_viewer?: boolean;
            highlight_reel_count?: number;
            has_requested_viewer?: boolean;
            edge_felix_video_timeline?: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: IUserFelixVideo[];
            };
        };
    };
    toast_content_on_load: null;
}
export interface IUserProfileImage {
    node: {
        __typename: string;
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
        location: {
            id: string;
            has_public_page: boolean;
            name: string;
            slug: string;
        } | null;
        thumbnail_src: string;
        thumbnail_resources: IThumbnail[];
        edge_media_to_caption: {
            edges: IUserMediaToCaption[];
        };
        edge_media_to_comment: {
            count: number;
        };
        edge_sidecar_to_children?: {
            edges: IUserSidecarToChildren[];
        };
        felix_profile_grid_crop?: {
            crop_left: number;
            crop_right: number;
            crop_top: number;
            crop_bottom: number;
        };
        video_view_count?: number;
    };
}
export interface IUserMediaToCaption {
    node: {
        text: string;
    };
}
export interface IUserSidecarToChildren {
    node: {
        __typename: string;
        id: string;
        shortcode: string;
        dimensions: {
            height: number;
            width: number;
        };
        display_url: string;
        gating_info: string | null;
        fact_check_overall_rating: string | null;
        fact_check_information: string | null;
        media_preview: string;
        owner: {
            id: string;
            username: string;
        };
        is_video: boolean;
        accessibility_caption: string | null;
    };
}
export interface IUserFelixVideo {
    node: {
        __typename: string;
        id: string;
        shortcode: string;
        dimensions: {
            height: number;
            width: number;
        };
        display_url: string;
        gating_info: string | null;
        fact_check_overall_rating: string | null;
        fact_check_information: string | null;
        media_preview: string | null;
        owner: {
            id: string;
            username: string;
        };
        is_video: boolean;
        accessibility_caption: string | null;
        edge_media_to_caption: {
            edges: IUserMediaToCaption[];
        };
        edge_media_to_comment: {
            count: number;
        };
        comments_disabled: boolean;
        taken_at_timestamp: DOMTimeStamp;
        edge_liked_by: {
            count: number;
        };
        edge_media_preview_like: {
            count: number;
        };
        location: {
            id: string;
            has_public_page: boolean;
            name: string;
            slug: string;
        } | null;
        thumbnail_src: string;
        thumbnail_resources: IThumbnail[];
        felix_profile_grid_crop: {
            crop_left: number;
            crop_right: number;
            crop_top: number;
            crop_bottom: number;
        };
        encoding_status: string | null;
        is_published: boolean;
        product_type: string;
        title: string;
        video_duration: number;
        video_view_count: number;
    };
}
export interface IUserProfileResult {
    profile: IUserProfileContent['graphql']['user'] | null;
    ok: boolean;
}
