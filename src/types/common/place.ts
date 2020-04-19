import { IThumbnail } from './thumbnail';
import { ICountry } from './country';
import { ICity } from './city';

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
  edge_location_to_media: {
    count: number;
    page_info: {
      has_next_page: boolean;
      end_cursor: string | null;
    };
    edges: IPlaceLocationToMedia[];
  };
  edge_location_to_top_posts: {
    count: number;
    page_info: {
      has_next_page: boolean;
      end_cursor: string | null;
    };
    edges: IPlaceLocationToTopPosts[];
  };
  directory: {
    country: ICountry;
    city: ICity;
  };
}

export interface IPlaceLocationToMedia {
  node: {
    comments_disabled: boolean;
    id: string;
    edge_media_to_caption: {
      edges: IPlaceMediaToCaption[];
    };
    shortcode: string;
    edge_media_to_comment: {
      count: number;
    };
    taken_at_timestamp: DOMTimeStamp;
    dimensions: {
      height: number;
      width: number;
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
    accessibility_caption?: string | null;
    video_view_count?: number;
  };
}

export interface IPlaceMediaToCaption {
  node: {
    text: string;
  };
}

export interface IPlaceLocationToTopPosts {
  node: {
    id: string;
    edge_media_to_caption: {
      edges: IPlaceMediaToCaption[];
    };
    shortcode: string;
    edge_media_to_comment: {
      count: number;
    };
    taken_at_timestamp: DOMTimeStamp;
    dimensions: {
      height: number;
      width: number;
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
  }
}
