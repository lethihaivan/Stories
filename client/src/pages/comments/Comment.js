import React from "react";

export default function Comment(props) {
    const { name, content, updatedAt } = props.comment;

    const curTime = new Date().toLocaleString();
    console.log(props.comment.author);
    return (
        <div className="media mb-3"
            style={{
                "fontSize": "15px",
                "textAlign": "left"
            }}>
            <img
                className="rounded-circle"
                width="48"
                height="48"
                src={props.comment.author.avatarUrl}
            />
            <div className="media-body p-2 shadow-sm rounded bg-light border"
            >
                <small className="float-right text-muted"> {updatedAt.toLocaleString()}</small>
                <h3 className="mt-0 mb-1 text-muted"
                    style={{
                        "fontFamily": "'Times New Roman', serif",
                        "fontWeight": "bold"

                    }}>{props.comment.author.fullName}</h3>
                {content}
            </div>
        </div>
    );
}