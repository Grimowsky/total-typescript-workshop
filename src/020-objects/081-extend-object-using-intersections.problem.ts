import { Extends, Expect } from "@total-typescript/helpers";

type Common = {
    id: string;
    createdAt: Date;
    name: string;
};

type User = {
    email: string;
} & Common;

type Product = {
    id: string;
    price: number;
} & Common;

type tests = [
    Expect<
        Extends<
            {
                id: string;
                createdAt: Date;
                name: string;
                email: string;
            },
            User
        >
    >,
    Expect<
        Extends<
            {
                id: string;
                createdAt: Date;
                name: string;
                price: number;
            },
            Product
        >
    >,
];
