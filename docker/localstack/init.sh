#!/bin/bash

awslocal s3 mb s3://request-form-app-dev
awslocal s3 mb s3://request-form-app-test

# CORS設定を追加
aws --endpoint-url=http://localhost:4566 \
  s3api put-bucket-cors \
  --no-sign-request \
  --bucket request-form-app-dev \
  --cors-configuration '{
    "CORSRules": [
        {
            "AllowedHeaders": ["*"],
            "AllowedMethods": ["GET", "PUT", "POST"],
            "AllowedOrigins": ["http://localhost:3000"],
            "ExposeHeaders": ["Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Allow-Headers"],
            "MaxAgeSeconds": 3000
        }
    ]
}'