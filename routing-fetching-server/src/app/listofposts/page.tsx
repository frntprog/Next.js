import Image from "next/image";

const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
};

const ListOfPosts = async () => {
  const [posts, users, dog] = await Promise.all([
    getPostData(),
    getUsersData(),
    getDogData(),
  ]);

  return (
    <>
      <Image src={dog.message} alt="dog" width={300} height={300} />
      <div>
        {posts.map((post, index): any => {
          return <p key={index}>{post.title}</p>;
        })}
      </div>
      <div>
        {users.map((user, index): any => {
          return <p key={index}>{user.username}</p>;
        })}
      </div>
    </>
  );
};

export default ListOfPosts;
