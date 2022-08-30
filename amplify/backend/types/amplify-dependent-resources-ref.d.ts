export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "meddentdb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "signup": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "signup": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}