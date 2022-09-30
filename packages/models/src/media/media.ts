
export type IMediaType = 'image' | 'video' | string;

export type IMedia = {
  src: string;
  type: IMediaType;
  alt?: string;
};
