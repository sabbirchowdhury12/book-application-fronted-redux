/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditBookMutation, useGetBookQuery } from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";
import { Book } from "../type/globalType";

const EditBook: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Book>();
  const { data } = useGetBookQuery(id);

  const [editBook] = useEditBookMutation();
  const onSubmit = async (data: Book) => {
    const updatedData = {
      id,
      ...data,
    };

    try {
      await editBook(updatedData).unwrap();
      toast.success("Update successful");
      navigate(`/books/${id}`);
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Update failed");
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Author
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required"
            defaultValue={data?.author}
            {...register("author", { required: "author is required" })}
          />
        </div>
        <div>
          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Genre
          </label>
          <input
            type="text"
            defaultValue={data?.genre}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
            {...register("genre", { required: "genre is required" })}
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            defaultValue={data?.title}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
            {...register("title", { required: "title is required" })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditBook;
