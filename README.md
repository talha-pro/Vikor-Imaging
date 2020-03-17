2nd iteration of Customer Portal using modern AWS amplify library updates

pull backend like this:

amplify pull --appId d1dzd3h8yqjeyr --envName develop


to recieve a token for user authentication:

aws cognito-idp admin-initiate-auth --user-pool-id us-east-1_tem92c1TB --client-id 6jhbbtj6cpg35qhonm22b57cl0 --auth-flow ADMIN_NO_SRP_AUTH --auth-parameters USERNAME=iclausman,PASSWORD=password

to confirm users:

aws cognito-idp admin-respond-to-auth-challenge --user-pool-id us-east-1_tem92c1TB --client-id 6jhbbtj6cpg35qhonm22b57cl0 --challenge-name NEW_PASSWORD_REQUIRED --challenge-responses NEW_PASSWORD=password1,USERNAME=iclausman --session "os_7jmbdMiOcG3QjV-CB52elGZ-QNRvuqzPk3wm3sE2q4ZJB9c0-dY26wVLpf8TGxG2p2p08lHACRrRV0YVJWqNeUhKea9zGRMbKMKyf9Tw7GIouEs5uaZqm-XI5AxeFZkAh1RgSk6q5sBiqlcabOZNSdR9B1HaD2dJlojE3chaQ9Xracz0O8fY-tm0FI5M-ClXopxLbWmQWJngdNfrgwhMuib0sV86Zon5C6PjQmQ_yJTYnp5bHt_llskD6dO7k63w97Iozq1iqGLG9xW-PU-8MZ1FPxQouMnxW5oJPvoviy4rTc04d0Hsnf_EWlinYHFzQ0XdrohRRaUwMR9LHkc3JHTcZW_jJ2au2F4AHKETkUJVtIDavptibNEjh5DCRqHWZlVvDvgKs8F5cfAzkgvGr6DZ4Sndmyp17ydfZJI4OfHmYsb08FB6YIattILkJX3t4GaEbZ4tnC6am60d9syrhj0u8XYb3MDC09dBV9UDCEYVERkkrWQKnUx65puAruat5xG2lvqahIJU6EWXvQcnIr2tKuKPn_ON8HvV5tz7MwDSy_JoA6hztvvYJsn3sEjd9XbnOuiz-3gJQrdjxt_xWcOMZKl7dg2f4ORsi9rd1s818TbZomLhdKo_wJ3BM4ipZX9HISTn3w8DrlrYWd912a8KM_APodUGTjFgk4ARs9IDjU0Z_yZsdYlLiXVrHLp-VJ3JylbEgA3b-Xb5Er7lrOXMJ-e4sgebMHdHJy5hX3NWUV8-ZlZHwbRPwhvvfkIs3rosTde06STnpTCAxJwjcfRsgkVmN8vuDs-03EoglYmgCsyl3c9MBbVkwnlW6mpRXm31pLJecAS5E8FSAlSQg4xPljtYLt8vfwbnnN-V72wlPFSnIYOnrcqgzT08ZD0XeeyVad6Sgqy7AsenahLI6p6HtCkWWIaxWAeiMXiHzRs9AQf7kBIF60NOntFbl"

vikorbeta2

welcome2vikor#dmin

sample query:

mutation {
  createProperty(input:{name:"3981 Walcott Lane", address:"3981 Walcott Lane", owner:"drarey"}) {
    id
    name
    address
    owner
  }
}

mutation {
    createPhoto(input:{title:"1", fullsize:"https://fileshare-vikor.s3.us-east-2.amazonaws.com/drarey/3981walcott/ext/DJI_0150.JPG", thumbnail:"https://fileshare-vikor.s3.us-east-2.amazonaws.com/drarey/3981walcott/ext/thumbnails/DJI_0150_tn.jpg" ,photoPropertyId:"0504eec5-837f-4f41-b1dc-d2cd4f4ba13f"}) {
    id
    title
    thumbnail
    fullsize   
  }
  
}

"id": "0504eec5-837f-4f41-b1dc-d2cd4f4ba13f"

