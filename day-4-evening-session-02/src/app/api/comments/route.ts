import { Comment, comments } from "./data";
import { NextRequest, NextResponse } from "next/server";

//! CRUD opertions:

//? C: Create = POST               Done
//? R: Read = GET                  Done
//? U: Update = PUT/PATCH          Done
//? D: Delete = DELETE             Done

export const GET = async () => {
  return NextResponse.json(comments);
};

export const POST = async (request: NextRequest) => {
  const comment = await request.json();
  //   console.log(comment);
  const newComment: Comment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new NextResponse(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
