/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { css } from "@emotion/react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../components/Button"

function EditPostPage() {
    const [post, setPost] = useState({})
    const [description, setDescription] = useState({})
    let params = useParams()
    let history = useHistory()

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    function handleTitleChange(event) {
        setPost(event.target.value)
    }


    useEffect(() => {
        async function getPostById() {
            let response = await fetch("http://localhost:8000/posts/" + params.postId)
            let data = await response.json()
            setPost(data.data)
        }
        getPostById()
    }, [])

    async function creatPost() {
        let response = await fetch("http://localhost:8000/posts/" + params.postId, {
            method: "PUT",
            body: JSON.stringify({ title: post, content: description }),
            headers: {
                "content-type": "application/json",
            }
        })
        if (response.ok) {
            history.push("/home")

        }


    }

    function handleFormSubmit(event) {
        event.preventDefault()
        creatPost()

    }


    return (
        <div>
            <div>
                <h1>Edit post page</h1>
            </div>;
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange={handleTitleChange} value={post.title} ></input>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onChange={handleDescriptionChange} value={post.content}></input>
                <Button type="submit">Edit</Button>
                <Button onClick={() => {
                    history.push('/home')
                }}>Cancel</Button>
            </form>
        </div>

    )
}
export default EditPostPage
