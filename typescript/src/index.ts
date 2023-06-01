import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(event?: APIGatewayProxyEvent, context?: unknown): Promise<APIGatewayProxyResult> {

    // start here

    return Promise.resolve({
        statusCode: 200,
        body: '<html><body><h1>This is an email</h1></body></html>'
    });
}
