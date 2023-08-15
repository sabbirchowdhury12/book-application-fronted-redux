import { useForm } from "react-hook-form";
import { useAddBookMutation } from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";
import { Book } from "../type/globalType";
import { useAppSelector } from "../redux/hooks";

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm<Book>();
  const { user } = useAppSelector((state) => state.user);

  const [addBook] = useAddBookMutation();
  const onSubmit = async (data: Book) => {
    data.email = user?.email;

    const response = await addBook(data);
    if ("data" in response) {
      if (response.data.status === true) {
        toast.success(response.data.message);
        reset();
      } else toast.success(response.data.message);
    }
  };
  return (
    <div className="block w-3/5 mx-auto mt-10 h-screen">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
            {...register("title", { required: "title is required" })}
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Published Date
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
            {...register("publicationDate", {
              required: "publicationDate is required",
            })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
