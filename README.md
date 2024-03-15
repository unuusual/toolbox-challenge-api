# API Challenge TOOLBOX

This API could be run with NODE v14.

## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm test

## Swagger documentation can be found at

    http://localhost:3000/api/v1/docs

# API

The API to the example app is described below.

## Get list of files, only names.

### Request

`GET /files/list`

    curl -v -X GET "http://localhost:3000/files/list" -H "accept: application/json"

### Response

    GET /files/list HTTP/1.1
    Host: localhost:3000
    User-Agent: curl/7.81.0
    accept: application/json
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Access-Control-Allow-Credentials: true
    Content-Type: application/json; charset=utf-8
    Content-Length: 121
    ETag: W/"79-YIEs2/NsDaFuCQCeEm7OGIT0Ep4"
    Date: Thu, 14 Mar 2024 23:02:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"files":["test1.csv","test2.csv","test3.csv","test18.csv","test4.csv","test5.csv","test6.csv","test9.csv","test15.csv"]}

## Get list of formatted CSV

### Request

`GET /files/data`

    curl -v -X GET "http://localhost:3000/files/data" -H "accept: application/json"

### Response

    GET /files/data HTTP/1.1
    Host: localhost:3000
    User-Agent: curl/7.81.0
    accept: application/json
    
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Access-Control-Allow-Credentials: true
    Content-Type: application/json; charset=utf-8
    Content-Length: 4855
    ETag: W/"12f7-fXG1wZl4UbbHiCHh4gJJTxT8KrI"
    Date: Thu, 14 Mar 2024 23:03:59 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    [{"file":"test1.csv","lines":[]},{"file":"test2.csv","lines":[{"file":"test2.csv","text":"rhEIH"},{"file":"test2.csv","text":"aqGJXCWnrWimVJjqjyeckrPxN","number":"861070","hex":"f1174a1c37d6c0e6a96fdfef8767afbd"}]}.......]

## Get a specific formatted CSV by fileName

### Request

`GET /files/data?fileName={name}`

    curl -v -X GET "http://localhost:3000/files/data?fileName=test2.csv" -H "accept: application/json"

### Response

    GET /files/data?fileName=test2.csv HTTP/1.1
    Host: localhost:3000
    User-Agent: curl/7.81.0
    accept: application/json
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Access-Control-Allow-Credentials: true
    Content-Type: application/json; charset=utf-8
    Content-Length: 187
    ETag: W/"bb-33nyn5j/6UYPsPov5HYHdzqQtQU"
    Date: Thu, 14 Mar 2024 23:06:19 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    [{"fileName":"test2.csv","lines":[{"file":"test2.csv","text":"rhEIH"},{"file":"test2.csv","text":"aqGJXCWnrWimVJjqjyeckrPxN","number":"861070","hex":"f1174a1c37d6c0e6a96fdfef8767afbd"}]}]
