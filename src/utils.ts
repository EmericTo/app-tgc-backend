import { ObjectId } from "./entities/ObjectId";

export function merge(entity: any, data: any): any {
 
  for (const [key, value] of Object.entries(data)){
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      value[0] instanceof ObjectId
    ) 
    {
      if (!(key in entity)){
        throw new Error(
          `error key`
        );
      }

      if (Array.isArray(entity[key])){
        data[key] = data[key].map((entry: ObjectId) => {
          const existingEntry = entity[key].find(
            (entityEntry: ObjectId) => entityEntry.id == entry.id
          );

          return existingEntry || entry;
        });
      }
    }
  }

  Object.assign(entity, data);
  return entity;
}