import loadSerializableQuery from "src/relay/loadSerializableQuery";
import styles from "styles/MainView.module.css";
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
    // <Lang.Provider value={"test"}>
    <div className={styles.main}>
      <MainViewClientComponent preloadedQuery={preloadedQuery} />
    </div>
    // </Lang.Provider>
  );
};

export default Page;

export const revalidate = 0;
