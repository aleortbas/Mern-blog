import { useState, useEffect } from "react";

const useFetchImages = (blogs) => {
  const fetchedImageBlogs = [];
  const fetchedImageUsers = [];

  const [imageBlog, setImageBlog] = useState([]);
  const [imageUser, setImageUser] = useState([]);

  useEffect(() => {

    let filePathPost, filePathUser = "";


    const fetchData = async () => {
    for (let i = 0; i < blogs.length; i++) {
      const elementBlogs = blogs[i];
      const splitIdPost = elementBlogs.post_id
      const splitPathPost = elementBlogs.file_path.split(" ")
      const file_path_post = splitPathPost.map(path => path.split("/").pop())
      const splitPathUser = elementBlogs.file_path_user.split("/")
      filePathPost = file_path_post
      filePathUser = splitPathUser.pop()

      const requestData = {
        filePathPost,
        filePathUser
      };

      try {

        const response1 = await fetch(`http://localhost:5000/imageJson`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
        console.log(response1);
        if (response1.ok) {
          const data = await response1.json();
          console.log(data);
          const image_blog = data.image_Blog

          fetchedImageBlogs.push(image_blog)

        }
      } catch (error) {
        console.error("SU PUTA MADRE: ", error);
      }
    }

    setImageBlog(fetchedImageBlogs)

  }
  fetchData();


  }, [blogs]);

  return{ imageBlog, imageUser}
};

export default useFetchImages;