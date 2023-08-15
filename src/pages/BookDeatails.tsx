import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useGetBookQuery,
} from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-hot-toast";
import React from "react";

const BookDeatails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  const [deleteBook] = useDeleteBookMutation();

  const [addReview] = useAddReviewMutation();
  const handleDeleteBook = async (id: string) => {
    const isDelete = confirm("are you sure to delete this book");
    if (isDelete) {
      const response = await deleteBook(id);
      if ("data" in response) {
        if (response.data.status === true) {
          toast.success(response.data.message);
          navigate("/allbook");
        } else toast.error("something wrong");
      }
    }
  };

  const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review = (e.target as HTMLFormElement).review.value;
    const response = await addReview({ id, review });

    if ("data" in response) {
      if (response.data.modifiedCount > 0) {
        toast.success("revied added");
        e.target.reset();
      } else toast.error("something wrong");
    }
  };

  return (
    <div className="block w-4/5 md:w-3/5 mx-auto  mt-10">
      <div className="block    rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Author: {data?.author}
          </h5>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Genre: {data?.genre}
          </p>
        </div>
        <ul className="w-full">
          <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
            Title: {data?.title}
          </li>
          <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
            Published Date: {data?.publicationDate}
          </li>
        </ul>
        <div className="p-2">
          {user?.email === data?.email && (
            <>
              <Link
                type="button"
                to={`/edit/${id}`}
                className="bg-black text-white p-1.5 capitalize  rounded m-4"
              >
                Edit Book
              </Link>
              <button
                className="bg-black text-white p-1.5 capitalize  rounded m-4"
                onClick={() => handleDeleteBook(id!)}
              >
                Delete Book
              </button>
            </>
          )}
        </div>
        <form action="" onSubmit={handleReview}>
          <textarea
            required
            className="border border-black mb-4  w-full p-4 resize-none"
            name="review"
            placeholder="write a review"
            id=""
          />
          {user?.email ? (
            <button
              type="submit"
              className="bg-black text-white p-1.5 capitalize  rounded m-4"
            >
              add a review
            </button>
          ) : (
            <Link
              to={"/login"}
              className="bg-black text-white p-1.5 capitalize  rounded m-4 "
            >
              Login to Review
            </Link>
          )}
        </form>
        <p className="m-4 underline font-bold text-xl">Reviews:</p>
        {data?.reviews?.map((review: string, ind: number) => {
          return (
            <p key={ind} className="p-4">
              {" "}
              {ind + 1}. {review}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BookDeatails;
