import axios, { AxiosError } from 'axios';

export async function callApi(endpoint: string, accessToken: string): Promise<any> {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    };

    try {
      const response = await axios.get(endpoint, options);
      return response.data;
    } catch (error:any) {
      //console.log(error);

      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;

        if (axiosError.response) {
          console.error('Status Code:', axiosError.response.status);
          console.error('Response Data:', axiosError.response.data);
        }
      } else {
        console.error('Non-Axios Error:', error.message);
      }
      throw new Error(`Failed Fetching Resources from ${endpoint}: ${error}`);
    }
}
