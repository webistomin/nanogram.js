export interface ISearchResponse {
    users?: ISearchUsers[];
    places?: ISearchPlaces[];
    hashtags?: ISearchHashtag[];
    has_more: boolean;
    rank_token: number;
    clear_client_cache: boolean;
    status: string;
}
export interface ISearchUsers {
    position: number;
    user: {
        pk: string;
        username: string;
        full_name: string;
        is_private: boolean;
        profile_pic_url: string;
        profile_pic_id: string;
        is_verified: boolean;
        has_anonymous_profile_picture: boolean;
        mutual_followers_count: number;
        latest_reel_media: number;
    };
}
export interface ISearchPlaces {
    place: {
        location: {
            pk: string;
            name: string;
            address: string;
            city: string;
            short_name: string;
            external_source: string;
            facebook_places_id: number;
        };
        title: string;
        subtitle: string;
        media_bundles: [];
        slug: string;
    };
    position: number;
}
export interface ISearchHashtag {
    hashtag: {
        name: string;
        id: number;
        media_count: number;
        use_default_avatar: boolean;
        profile_pic_url: string;
        search_result_subtitle: string;
    };
    position: number;
}
export interface ISearchResult {
    media: {
        users: ISearchResponse['users'] | null;
        places: ISearchResponse['places'] | null;
        hashtags: ISearchResponse['hashtags'] | null;
    };
    ok: boolean;
}
//# sourceMappingURL=search-page.d.ts.map