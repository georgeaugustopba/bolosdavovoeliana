module.exports = ({ env }) => ({
    // ..
    'transformer': {
        enabled: true,
        config: {
            prefix: '/api/',
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            }
        }
    },
    // ..
});


module.exports = ({ env }) => ({

    upload: {

        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('us-east-1'),
            params: {
                Bucket: env('api-strapi-bolos'),
            },
        },
    },
});


