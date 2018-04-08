# Tesco Location Service

Unofficial client for Tesco Labs Store Location API (https://devportal.tescolabs.com/docs/services/5731ed21611a4b2968547c5f/operations/5731edcc611a4b2968547c60)

Highly Experimental Client that can be subject of changes. Use on own risk!


## How to use

```js
const {TescoStoreLocationClient, StoreLocationQueryBuilder} = require('tesco-store-location-sdk').SDK

const queryBuilder = new StoreLocationQueryBuilder();

const subscriptionKey = 'YOUR_SUBSCRIPTION_KEY_FROM_DEV_PORTAL'

TescoStoreLocationClient
    .instance(subscriptionKey)
    .searchLocations(queryBuilder.ukTown("Welwyn Garden City").build())
    .then((result) => {
        console.log(result.results[0])
    })
    .catch((err) => {
        console.error(err)
    })
```