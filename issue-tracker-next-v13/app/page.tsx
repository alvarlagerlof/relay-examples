import loadSerializableQuery from "src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "__generated__/MainViewQuery.graphql";
import MainViewClientComponent from "./MainViewClientComponent";

// import { createServerContext } from "react";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {
    owner: "facebook",
    name: "relay",
  });

  // const Lang = createServerContext("lang", "en");

  return (
    <Lang.Provider value={"test"}>
      <MainViewClientComponent preloadedQuery={preloadedQuery} />
    </Lang.Provider>
  );
};

export default Page;

export const revalidate = 0;
