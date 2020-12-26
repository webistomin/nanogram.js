export interface IEdgeMediaToCaption {
  edges?: IEdgeMediaToCaptionNode[];
}

export interface IEdgeMediaToCaptionNode {
  node: {
    text: string;
  };
}
