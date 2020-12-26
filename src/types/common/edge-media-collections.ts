export interface IEdgeMediaCollections {
  count?: number;
  page_info?: {
    has_next_page: boolean;
    end_cursor: string | null;
  };
  edges?: unknown[];
}
