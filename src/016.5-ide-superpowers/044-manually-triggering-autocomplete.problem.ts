type MyObj = {
    foo: string;
    bar: number;
    baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
    bar: 0,
    baz: false,
    foo: "",
});

document.addEventListener(
    // Autocomplete this string!
    "",
    (event) => {
        console.log(event);
    },
);
