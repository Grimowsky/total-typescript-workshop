import { Equal, Expect } from "@total-typescript/helpers";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

type FetchedUser = Pick<User, "name" | "email">;

const fetchUser = async (): Promise<FetchedUser> => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
};

const example = async () => {
    const user = await fetchUser();

    type test = Expect<
        Equal<typeof user, { name: string; email: string }>
    >;
};
