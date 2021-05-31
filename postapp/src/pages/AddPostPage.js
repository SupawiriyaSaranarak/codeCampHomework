
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled'
import { useState } from "react"
import { useHistory } from "react-router-dom";
import Button from "../components/Button"



const StyledButton = styled.button`
border-radius: 5px;
background-color: khaki;
height: 40px;
width: 120px;
color: ${(props) => (props.primary ? "crimson" : "cornflowerblue")};
`

function AddPostPage() {
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

    let history = useHistory()

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    console.log("title: ", title)
    console.log("description: ", description)

    async function createPosts() {
        let response = await fetch("http://localhost:8000/posts/", {
            method: "POST",
            body: JSON.stringify({ title: title, content: description }),
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
        createPosts()
        // ปกติมันจะรีเฟรชตัวเองอยู่แล้วสำหรับการซับมิต
        console.log("submit")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* มีปุ่มไทป์ซับมิตถึงจะทำงาน */}
            <div className="postapp-header">
                <h1 css={css`
            color:rgb(254, 255,67); 
            font-size: 100px;`}>Post App</h1>

            </div>
            <div className="title-container">
                <label htmlFor="title"><strong>Title</strong></label>

                <input id="title" type="text" placeholder="Enter post title" onChange={handleTitleChange} value={title}></input>
            </div>
            <div className="descripton-container">
                <label htmlFor="descripton"><strong>Descripton</strong></label>
                <textarea id="descripton" type="text" placeholder="Enter post title" onChange={handleDescriptionChange} value={description} />
            </div>

            <Button type="submit">Add</Button>

        </form>
    );

}

export default AddPostPage