import { NextRequest, NextResponse } from "next/server";
import { comments, Comment } from "../data";

interface Param {
  params: {
    id: string;
  };
}

export const GET = async (_request: NextRequest, { params }: Param) => {
  //   console.log(params.id);
  const comment = comments.find(
    (comment: Comment) => comment.id === parseInt(params.id)
  );
  return NextResponse.json(comment);
};

export const PATCH = async (request: NextRequest, { params }: Param) => {
  //   console.log(params.id);
  const { text } = await request.json();
  const index = comments.findIndex(
    (comment: Comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return NextResponse.json(comments[index]);
};

export const DELETE = async (_request: NextRequest, { params }: Param) => {
  //   console.log(params.id);
  const index = comments.findIndex(
    (comment: Comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return NextResponse.json(deletedComment);
};
