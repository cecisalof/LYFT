# LYFT

Lyft Interview Test
Prompt
Please write a small web application in Python/Ruby/Node. The application only needs to do the following:

      Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
      Return a JSON object with the key “return_string” and a string containing every third letter from the original string.

      Example
      If you POST
      {"string_to_cut": "iamyourlyftdriver"}
      it will return:
      {"return_string": "muydv"}

Note: To see expected behavior you can test against a current working example with the command:
curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
