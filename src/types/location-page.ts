import { IPlace } from './common/place';

export interface ILocationResponse {
  entry_data: {
    LocationsPage: ILocationContent[];
  };
}

export interface ILocationContent {
  graphql: {
    location: IPlace;
  };
  logging_page_id?: string;
  photos_and_videos_header?: boolean;
  recent_pictures_and_videos_subheader?: boolean;
  top_images_and_videos_subheader?: boolean;
}

export interface ILocationResult {
  location: ILocationContent['graphql']['location'] | null;
}
