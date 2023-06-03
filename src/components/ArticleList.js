import React from "react";
import Article from "./Article";

function ArticleList(prop) {
    const { post } = prop
    const postHandler = post?.map((currentPost) => {
        return (
            <Article key={currentPost.id} post={currentPost} />
        )
    })

    return (
        <main>
            { postHandler }
        </main>
    )
}

export default ArticleList