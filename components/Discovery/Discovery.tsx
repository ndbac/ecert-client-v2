/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Postcard from "./Postcard/Postcard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { useRouter } from "next/router";
import {
  IPostGet,
  IPostState,
} from "../../redux/modules/post/interface/post.interface";
import { getPost } from "../../redux/modules/post/slices/post.slice";

function Discovery() {
  const store = useSelector<RootState>(
    (state) => state.postReducer
  ) as IPostState;
  const { list } = store;

  const [load, setLoad] = useState(6);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const { sort, page, limit } = router.query;
    const data = {
      sort: sort,
      page: page,
      limit: limit ? limit : load,
    } as IPostGet;
    dispatch(getPost(data));
  }, [dispatch, load, router.query]);

  const handleLimit = () => {
    setLoad((load) => load + 6);
  };
  // const content = []
  // for (const post of list) {
  //   content.push(
  //     <Postcard
  //       key={post._id}
  //       createdAt={post.createdAt}
  //       title={post.title}
  //       photoUrl={post.photoUrl}
  //       description={post.description}
  //       postId={post._id}
  //       categoryId={post.categoryId}
  //       userId={post.userId}
  //     />)
  // }

  return (
    <section className="relative py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-20 mx-auto text-center">
          <span className="text-xl text-blue-600 font-semibold">
            What's new at Shuffle
          </span>
          <h2 className="text-blueGray-400 mt-8 mb-10 text-4xl font-semibold font-heading">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <p className="text-xl text-blueGray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap -m-3 mb-16">
          {list?.map((post) => {
            return (
              <Postcard
                key={post._id}
                createdAt={post.createdAt}
                title={post.title}
                photoUrl={post.photoUrl}
                description={post.description}
                postId={post._id}
                categoryId={post.categoryId}
                userId={post.userId}
              />
            );
          })}
        </div>
        <div className="text-center">
          <button
            className="px-6 py-4 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
            onClick={handleLimit}
          >
            View More Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default Discovery;
