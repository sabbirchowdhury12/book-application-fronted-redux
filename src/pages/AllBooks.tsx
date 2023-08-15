import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useGetAllBookQuery } from "../redux/api/apiSlice";
import { Book } from "../type/globalType";
import { Link } from "react-router-dom";

const AllBooks: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  console.log(genre);
  const { data } = useGetAllBookQuery(
    {
      search: searchValue,
      genre: genre,
      year: year,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  // const handleSearch = async () => {
  //   await refetch();
  // };

  const TABLE_HEAD = ["Title", "Author", "Genre", "Publication Date", ""];

  return (
    <>
      <div className="m-4 mt-10 flex gap-2 flex-col md:flex-row items-center justify-between">
        <div>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            className="border border-black p-1.5 rounded"
            placeholder="search by title,author,genre"
          />
          <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            className="border mx-2 border-black p-1.5 rounded"
            placeholder="filter by genre"
          />
          <input
            type="text"
            onChange={(e) => setYear(e.target.value)}
            className="border border-black p-1.5 rounded"
            placeholder="filter by year ex: 2000"
          />
        </div>
        <Link
          to={"/addbook"}
          className="bg-black text-white p-2  text-right font-bold rounded "
        >
          Add Book
        </Link>
      </div>

      <Card className="h-full w-full p-4 mt-5 overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (
                { _id, title, author, genre, publicationDate }: Book,
                index: number
              ) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {author}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {genre}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {publicationDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Link to={`/books/${_id}`} className="font-medium">
                        Deatails
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default AllBooks;
