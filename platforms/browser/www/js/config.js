angular.module("woocommerce-api").constant("CONFIG", {

    // The url of your domain, both HTTP and HTTPS are supported.
    site_url: 'https://www.cambomarket.com',
    // site_url: 'http://localhost:8888/mobile/woocommerce-api/wordpress',

    // Max period of time to wait for reply from the server, defined in milliseconds.
    request_timeout: 8000,

    // The url that follows your main domain, the API version is of interest here, v3 is the latest.
    wc_api_endpoint: '/wc-api/v3',

    // Signature method
    oauth_signature_method: 'HMAC-SHA256',
    // oauth_signature_method: 'HMAC-SHA1',

    // Pair of credentials from your woocommerce installation, please refer to the documentation.
    // Apps today
    wc_consumer_key: 'ck_e81f51800ffdc9ca1dda31c5c658e7706266a7ac',
    wc_consumer_secret: 'ccs_0aa7a039e417ad768e241c2dea9b00ce96643ac7',
    // Localhost
    // wc_consumer_key: 'ck_86a13f2c0ec34a4c99374e120dba436d31f069c3',
    // wc_consumer_secret: 'cs_a0bc69e05eced4a8f464c08849c8f543946448d9',

    // The number of products to be fetched with each API call.
    products_per_page: 6,

    // The number of reviews to be fetched with each API call.
    reviews_per_page: 6,

    // Frontpage Slideshow Category
    slideshow_category: 'hoodies'

});
