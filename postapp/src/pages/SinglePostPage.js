
/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { css } from "@emotion/react";
import styled from '@emotion/styled'
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
// ส่งพารามิเตอร์มาจาก  URL




function SinglePostPage() {
    const [post, setPost] = useState({})
    // ({}) ขึ้นอยู่กับว่าเราจะเก็บข้อมูลแบบไหน
    let params = useParams();
    useEffect(() => {
        async function getPostById() {
            let response = await fetch("http://localhost:8000/posts/" + params.postId);
            let data = await response.json();
            console.log(data);
            setPost(data.data)
        }

        getPostById()
    }, [])
    return (
        <div>
            <div >
                <h1 css={css`
            color:rgb(254, 255,67); 
            font-size: 100px;`} > SinglePostPage </h1>
            </div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </div>)
}

export default SinglePostPage