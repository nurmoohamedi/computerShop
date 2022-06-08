import * as axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:8080/"
})

export const shopAPI = {
    getKeyboards() {
        return service.get("/keyboards").then(response => {
            debugger
            return response.data.data;
        })
    },
    addKeyboard(item) {
        return service.post("/keyboards", item).then(response => {
            console.log(response)
            return response.data;
        })
    },
    deleteKeyboard(id) {
        return service.delete("/keyboards/"+id,).then(response => {
            console.log(response)
            return response.data;
        })
    }
}