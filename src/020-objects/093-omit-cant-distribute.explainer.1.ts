import { Equal, Expect } from "@total-typescript/helpers";

type User = {
    id: string;
    name: string;
    age: number;
    imageId: string;
};

type Organisation = {
    id: string;
    name: string;
    address: string;
    imageId: string;
};

type Product = {
    id: string;
    name: string;
    price: number;
};

type Entity = User | Organisation | Product;

type EntityWithoutId = Omit<Entity, "id">;
//   ^?

type test = Expect<
    Equal<
        EntityWithoutId,
        | {
              name: string;
              age: number;
              imageId: string;
          }
        | {
              name: string;
              address: string;
              imageId: string;
          }
        | {
              name: string;
              price: number;
              imageId: string;
          }
    >
>;
