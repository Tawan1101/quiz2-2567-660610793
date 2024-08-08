"use client";

import { comments } from "@/libs/comments";
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">comment.user</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div>
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
