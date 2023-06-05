import axios from "axios";
// Hàm lấy dữ liệu của tất cả người dùng
const fetchAllUser = () => {
    return axios.get("https://reqres.in/api/users?page=1");
};
export { fetchAllUser };
