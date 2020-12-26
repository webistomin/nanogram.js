import { IEdgeLocationToMedia } from './edge-location-to-media';
import { IDirectory } from './directory';
export interface IPlace {
    id: string;
    name: string;
    has_public_page: boolean;
    lat: number;
    lng: number;
    slug: string;
    blurb: string;
    website: string;
    phone: string;
    primary_alias_on_fb: string;
    address_json: string;
    profile_pic_url: string;
    edge_location_to_media: IEdgeLocationToMedia;
    edge_location_to_top_posts: IEdgeLocationToMedia;
    directory: IDirectory;
}
//# sourceMappingURL=place.d.ts.map