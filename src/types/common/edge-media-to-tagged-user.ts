import { INodeOwner } from './node-owner';

export interface IEdgeMediaToTaggedUser {
  edges?: IEdgeMediaToTaggedUserNode[];
}

export interface IEdgeMediaToTaggedUserNode {
  node: {
    user: INodeOwner;
    x: number;
    y: number;
  };
}
