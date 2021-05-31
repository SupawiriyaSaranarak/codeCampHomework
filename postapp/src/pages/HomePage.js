
/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom"
import Button from "../components/Button"



function HomePage() {
    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState(null)
    let history = useHistory()

    useEffect(function () {
        // ใช้ข้อมูลแค่ครั้งเดียว
        async function getPosts() {
            try {
                let response = await fetch("http://localhost:8000/posts")
                let data = await response.json()
                console.log(data)
                console.log(data.data)
                setPosts(data.data)
            } catch (error) {
                setIsError(true)
                console.log('Error!')
            }

        }
        getPosts()

    }, [])
    // [] จะเกิดการรันเเค่ครั้งเดียวถ้ามี [] เป็น array dependency list 
    // แต่ถ้า [state] มันจะรันฟังก์ชันใน useEffect ก็ต่อเมื่อ state มีการเปลี่ยนแปลง เหมือนคอยดูว่าอะไรเปลี่ยนให้ทำอันนั้น

    function handleAddPostClick() {
        history.push("/addpost")
        console.log("testclick")
    }
    async function handleDeletePost(postId) {
        console.log("postId:", postId)
        let response = await fetch("http://localhost:8000/posts/" + postId, {
            method: "DELETE",
        })
        if (response.ok) {
            let newPosts = posts.filter((post) => {
                return post.id !== postId;
            });
            setPosts(newPosts);
        }
    }
    console.log(posts)
    return (
        <div>
            <div className="postapp-header">
                <h1 css={css`
            color:rgb(254, 255,67); 
            font-size: 100px;`}>Post App</h1>
                <Button primary={true} onClick={handleAddPostClick}>Add Post</Button>
                {/* <button className="add-post-button">Add post</button> */}
            </div>
            <div className="postbox-container">
                {isError && <h1>Something went wrong. Please Try again tmr.</h1>}

                {
                    posts.map((post) => {
                        return (
                            <div key={post.id} className="postbox">
                                <h3 onClick={() => {
                                    history.push('/post/' + post.id)
                                    // string + number coercion to (type conversion) to string
                                }}><strong>Title: {post.title}</strong></h3>
                                <h4>{post.content}</h4>
                                <div className="postFooter">
                                    <span>กระแต</span>
                                    <div className="post-button">
                                        <Button primary={true} onClick={() => {
                                            history.push('/editpost/' + post.id)
                                        }}>Edit</Button>
                                        <Button primary={true} onClick={function () {
                                            handleDeletePost(post.id)
                                        }}>Delete</Button>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


            </div >
        </div >


    );
}

export default HomePage