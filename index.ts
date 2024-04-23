import { getToken } from "./auth";
import { graphURL } from "./consts";
import { callApi } from "./fetch";

async function main(){
  const token = await getToken();
  const query  = `${graphURL}/v1.0/sites/${"link here"}/lists/`;
  const response = await callApi(query, token);
  console.log(JSON.stringify(response, null, 2));
}

main();
