import { GetServerSideProps } from "next";
import axios from "axios";

export default function Home({ message }: { message: string }) {
  return (
    <div>
      <h1>Welcome to DevOps Microservices</h1>
      <p>{message}</p>
    </div>
  );
}

// Fetch data on the server side
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/health"); // Test backend connection
    return { props: { message: res.data.message } };
  } catch (error) {
    return { props: { message: "Backend is not running!" } };
  }
};
