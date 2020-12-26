import { IPlace } from './common/place';
export interface IPlaceResponse {
    entry_data: {
        LocationsPage: IPlaceContent[];
    };
}
export interface IPlaceContent {
    graphql: {
        location: IPlace;
    };
    logging_page_id: string;
    photos_and_videos_header: boolean;
    recent_pictures_and_videos_subheader: boolean;
    top_images_and_videos_subheader: boolean;
}
export interface IPlaceResult {
    location: IPlaceContent['graphql']['location'] | null;
}
//# sourceMappingURL=place-page.d.ts.map