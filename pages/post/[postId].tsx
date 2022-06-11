import type { NextPage } from "next";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import {
  RootState,
  AppDispatch,
} from "../../redux/modules/common/common.interface";
import { useDispatch, useSelector } from "react-redux";
import { IPostState } from "../../redux/modules/post/interface/post.interface";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getPostDetail } from "../../redux/modules/post/slices/post.slice";

const PostDetail: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const store = useSelector<RootState>(
    (state) => state.postReducer
  ) as IPostState;
  const dispatch = useDispatch<AppDispatch>();
  const { post } = store;
  useEffect(() => {
    if (postId) {
      dispatch(getPostDetail(postId));
    }
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navigation />
      {post && (
        <Post
          key={post._id}
          title={post.title}
          description={post.description}
          userId={post.userId}
          createdAt={post.createdAt}
          _id={post._id}
          postId={postId}
          photoUrl={post.photoUrl}
          categoryId={post.categoryId}
        />
      )}
      <Footer />
    </div>
  );
};

export default PostDetail;
