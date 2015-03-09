# Ignite-Board

A simple tweet image feed application, the server will
listen to twitter for a hash tag and if that hashtag
has a picture, it will sent the url to the client to consume and load.

This example should demostrate most of node's features

## Usage

Create a `config.json` file and put your twitter api info:

``` json
{
  "consumer_key": "...",
  "consumer_secret": "...",
  "token":"...",
  "token_secret": "..."
}
```


``` sh
git clone git@github.com:twilson63/iboard-example.git
npm install
npm start [hashtag]
```

## Build by Adventure

``` sh
npm install iboard-adventure -g
iboard-adventure
```

