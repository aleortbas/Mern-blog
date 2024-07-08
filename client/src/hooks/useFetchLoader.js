import { useState, useEffect } from "react";

const useFetchImages = (blogs) => {
  const [imageBlog, setImageBlog] = useState("");
  const [imageUser, setImageUser] = useState("");

  useEffect(() => {

    let filePathPost, filePathUser = "";

    for (let i = 0; i < blogs.length; i++) {
      const elementBlogs = blogs[i];
      const splitPathPost = elementBlogs.file_path.split("/")
      const splitPathUser = elementBlogs.file_path_user.split("/")
      filePathPost = splitPathPost[4]
      filePathUser = splitPathUser[4]
    console.log("FOR LOOP filePathPost: ", filePathPost , " filePathUser: ", filePathUser);

    }

    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(`http://localhost:5000/uploads/${filePathPost}`),
          fetch(`http://localhost:5000/uploads/${filePathUser}`)
        ])
        if (!response1.ok || !response2.ok) {
          throw new Error('Network response was not ok')
        }

        const blob1 = await response1.blob()
        const blob2 = await response2.blob()

        const url1 = await URL.createObjectURL(blob1)

        const url2 = await URL.createObjectURL(blob2)

        setImageBlog(url1)
        setImageUser(url2)

      } catch (error) {
        console.error( error);
      }
    }

    fetchData();

  }, [blogs]);

  return{ imageBlog, imageUser}
};

export default useFetchImages;