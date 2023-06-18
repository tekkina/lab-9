import { Route, Routes, Navigate } from "react-router";
import NewProduct from "../../components/NewProduct/NewProduct";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import Posts from "../Posts";
import PostDetail from "../PostDetail";


export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="/add-post" element={<Navigate replace to="/posts" />} />

        </Routes>
    );
}

