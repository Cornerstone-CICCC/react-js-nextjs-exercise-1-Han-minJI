import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is my homepage",
  robots: "noindex, nofollow",
};

const Home = () => {
  return (
    <div>
      <h1 className="font-bold">Welcome to my site!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
        veniam iure distinctio numquam blanditiis consequuntur esse consequatur
        nesciunt pariatur vitae officiis enim! Voluptatem libero illum quae quo
        nulla error reprehenderit? Omnis magnam deleniti odit consequuntur
        eligendi sapiente neque optio quis minus pariatur fugit blanditiis modi,
        suscipit nam excepturi odio sint!
      </p>
    </div>
  );
};

export default Home;
