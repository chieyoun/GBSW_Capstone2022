import React,{useState, useEffect} from "react";

const Pagination = () => {

    const [posts, setPosts] = useState([])
    const [currentPosts, setCurrentPosts] = useState([])
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {setPage(page)}
    const [postPerPage] = useState(10);
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    useEffect(() => {
        setPosts([...Lists].reverse())
        setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
    }, [indexOfFirstPost])
    
    return (
        <>
        </>
    )
}