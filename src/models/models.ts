export interface INote {
  name: string;
  description: string;
  dateNote: string;
  active: boolean;
  remove: boolean;
  comments: IComment[];
}

export interface IComment {
  title: string;
  description: string;
  dateComment: string;
  response: IResponse[];
}

export interface IResponse {
  title: string;
  description: string;
  dateResponse: string;
}
