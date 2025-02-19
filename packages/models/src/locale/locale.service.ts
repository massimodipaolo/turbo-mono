import { FindParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import { ILocale } from './locale';

export async function getLocales(params: FindParams = {}): Promise<ILocale[]> {
  const store = await getStore<IModelStore>();
  const items = await store.locale.findMany(params);
  return items;
}

