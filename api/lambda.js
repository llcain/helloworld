import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "MyCustomersTable";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{customer_id}":
        await dynamo.send(
          new DeleteCommand({
            TableName: tableName,
            Key: {
              customer_id: event.pathParameters.customer_id,
            },
          })
        );
        body = `Deleted item ${event.pathParameters.customer_id}`;
        break;
      case "GET /items/{customer_id}":
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              customer_id: event.pathParameters.customer_id,
            },
          })
        );
        body = body.Item;
        break;
      case "GET /items":
        body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        body = body.Items;
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              customer_id: requestJSON.customer_id,
              phone_number: requestJSON.phone_number,
              first_name: requestJSON.first_name,
            },
          })
        );
        body = `Put item ${requestJSON.customer_id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
