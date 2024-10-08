async function imageJson(blogs) {

  const fetchedImageBlogs = [];

  for (let i = 0; i < blogs.length; i++) {
    const elementBlogs = blogs[i];
    const splitIdPost = elementBlogs.post_id;
    const splitPathPost = elementBlogs.file_path;
    const splitPathUser = elementBlogs.file_path_user.split("/");
    
    const filePathPost = splitPathPost;
    const filePathUser = splitPathUser.pop();

    const requestData = {
      splitIdPost,
      filePathPost,
      filePathUser,
    };

    try {
      const response1 = await fetch(`http://localhost:5000/imageJson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response1.ok) {
        const data = await response1.json();
        const image_blog = data.image_Blog;

        console.log("DATA", data);
        fetchedImageBlogs.push(image_blog);
      }
    } catch (error) {
      console.error("Error fetching image data: ", error);
    }
  }

  return fetchedImageBlogs;
}

module.exports = { imageJson };
