import { Callback, Context, Handler } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

export const hello: Handler = (event: any, context: Context, callback: Callback) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(undefined, response);
};
