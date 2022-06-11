/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IPostCard } from "../../../redux/modules/post/interface/post.interface";
import { useDispatch, useSelector } from "react-redux";
import { ICategoryState } from "../../../redux/modules/category/interfaces/category.interface";
import {
  AppDispatch,
  RootState,
} from "../../../redux/modules/common/common.interface";
import { useEffect } from "react";
import { getCategory } from "../../../redux/modules/category/slices/category.slice";
import { formatDate } from "../../../utils/formatDate";

const Postcard: React.FC<IPostCard> = (props) => {
  const categoryName = useSelector<RootState>(
    (state) => state.categoryReducer
  ) as ICategoryState;
  const { category } = categoryName;
  // const account = useSelector<RootState>(
  //   (state) => state.accountReducer
  // ) as AccountState
  // const { user } = account
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const categoryId = props.categoryId;
    if (categoryId) {
      dispatch(getCategory(categoryId));
    }
  }, [dispatch, props.categoryId]);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="p-6 border rounded-xl">
        <div className="relative h-52 mb-6">
          {category && (
            <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
              {category.name}
            </span>
          )}
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
            alt=""
          />
        </div>
        <span className="inline-block mb-4 text-xs">
          {formatDate(props.createdAt)}
        </span>
        <Link href={`/post/${encodeURIComponent(props.postId)}`} passHref>
          <h2 className="text-blue-600 mb-4 text-2xl font-semibold font-heading cursor-pointer">
            {props.title}
          </h2>
        </Link>
        <p className="mb-4 leading-relaxed">{props.description}</p>
      </div>
    </div>
  );
};

export default Postcard;
