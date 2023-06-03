import React from "react";
import Article from "./Article";

function ArticleList({ post }) {
    
    const postHandler = post?.map((post) => {
        return (
            <Article key={post.id} post={post} />
        )
    })

    return (
        <main>
            { postHandler }
        </main>
    )
}

export default ArticleList