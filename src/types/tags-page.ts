import { IEdgeHashtagToMedia } from './common/edge-hashtag-to-media';
import { IEdgeHashtagRelatedTags } from './common/edge-hashtag-related-tags';

export interface ITagsResponse {
  entry_data: {
    TagPage: ITagsContent[];
  };
}

export interface ITagsContent {
  graphql: {
    hashtag: {
      id: string;
      name: string;
      allow_following: boolean;
      description: string;
      is_following: boolean;
      is_top_media_only: boolean;
      profile_pic_url: string;
      edge_hashtag_to_media: IEdgeHashtagToMedia;
      edge_hashtag_to_top_posts: IEdgeHashtagToMedia;
      edge_hashtag_to_content_advisory: IEdgeHashtagToMedia;
      edge_hashtag_to_related_tags: IEdgeHashtagRelatedTags;
      edge_hashtag_to_null_state?: unknown;
    };
  };
}

export interface ITagsResult {
  tag: ITagsContent['graphql']['hashtag'] | null;
  ok: boolean;
}
