import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useGetAllBookQuery } from "../redux/api/apiSlice";
import { Book } from "../type/globalType";
import { Link } from "react-router-dom";

const AllBooks: React.FC = () => {
  const { data } = useGetAllBookQuery(undefined);
  console.log(data);

  const TABLE_HEAD = ["Title", "Author", "Genre", "Publication Date", ""];

  return (
    <Card className="h-full w-full p-4 mt-10 overflow-scroll">
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
  );
};

export default AllBooks;
