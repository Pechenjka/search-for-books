const checkResponse = (res) =>
    res.ok ? res.json() : Promise.reject(new Error(`status: ${res.status}, message: ${res.statusText}`));

class BooksApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getBooks(value, startIndex) {
        return fetch(
            `${this._baseUrl}/volumes?q=${value.categories !== "all" && `subject:${value.categories}`}+intitle:${
                value.search
            }&maxResults=32&printType=books&startIndex=${startIndex}&orderBy=${
                value.sorting
            }&key = ${process.env.API_KEY}`,
            {
                method: "GET",
                headers: this._headers,
            }
        )
            .then(checkResponse)
            .then((res) => {
                return res;
            });
    }
}

const booksApi = new BooksApi({
    baseUrl: "https://www.googleapis.com/books/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

export default booksApi;
