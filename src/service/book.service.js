import request from "./request";

const ENDPOINT = "api/book";

const searchBook = async (searchText) => {
//    console.log(searchText);
    const url = `${ENDPOINT}/search?keyword=${searchText}`;
    return request.get(url).then((res) => {
        return res;
    }).catch((err)=>{
        console.log(err);
    });
};

const getAll = async (params) => {
    const url = `${ENDPOINT}`;
    return request.get(url, { params }).then((res) => {
        return res;
    })
}


const bookService = {
    searchBook,
    getAll,
}

export default bookService;