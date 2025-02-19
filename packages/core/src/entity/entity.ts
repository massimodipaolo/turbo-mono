
export type IEquatable = number | string;

export type ILocalizedString = { [key: string]: string };

export type IOption = {
  id: IEquatable;
  name: string;
  [key: string]: any;
};

export type ISchema = {
  id: IEquatable;
  schema: string;
};

export type IEntity = ISchema & {
  [key: string]: unknown;
};

export type INamedEntity = IEntity & {
  name: string | ILocalizedString;
};

export type ITitledEntity = IEntity & {
  title: string | ILocalizedString;
};

export type IQuerable<T extends IEntity> = {
  findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | undefined>;
  findMany(params?: FindParams): Promise<T[]>;
  create(payload: T): Promise<T>;
  update(payload: T): Promise<T>;
  delete(id: IEquatable): Promise<T | undefined>;
};

export type FindParams = {
  where?: { [key: string]: unknown },
  market?: string,
  locale?: string,
};

export type FindWhereParams = {
  where: { [key: string]: unknown },
  market?: string,
  locale?: string,
};

export function toFindParams(idOrParams: IEquatable | FindWhereParams): FindWhereParams {
  if (typeof idOrParams === 'number' || typeof idOrParams === 'string') {
    return { where: { id: idOrParams } };
  } else {
    return idOrParams;
  }
}
