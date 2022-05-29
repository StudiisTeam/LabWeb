import { gql, useQuery } from "@apollo/client";
import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { withApollo } from "../../lib/withApollo";

function Home() {
  const { user } = useUser();
  return (
    <div>
      <h1>hello world</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({req, res}) => {
    const token = getAccessToken(req, res)  
    return{
      props: {
      }
    }
  }
})

export default withApollo(Home)