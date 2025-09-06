import React, { useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-3 flex flex-wrap h-full m-5">
        <div className="w-full justify-center mb-6">
          <img
            src={
              featuredImage
                ? appwriteService.getFilePreview(featuredImage)
                : "/no-image.png"
            }
            alt={title}
            className="rounded-xl w-full h-full"
          />
          <h2 className="text-xl pb-10 mb-10 font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
